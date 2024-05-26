import { useEffect, useState } from "react";
import AddTweet from "../../components/AddTweet/AddTweet";

import "./DashboardPage.css";
import { backendUrl } from "../../api/api";
import TweetBox from "../../components/TweetBox/TweetBox";

// const DashboardPage = ({ token, user }) => {
//   console.log(token);
//   const [dashTweets, setDashTweets] = useState([]);
//   const [errorMessage, setErrorMessage] = useState("");
//   useEffect(() => {
//     async function fetchOnDashboard() {
//       const res = await fetch(`${backendUrl}/api/v1/tweets/followingTweets`, {
//         headers: { authorization: `Bearer${token}` },
//       });

//       const data = await res.json();
//       if (!data.result) setErrorMessage(data.message || "Could not load tweets");

//       setDashTweets(data.result);
//       setErrorMessage("");
//       console.log(data);
//     }
//     fetchOnDashboard();
//   }, []);

//   useEffect(() => {
//     const [userFetch, setUserFetch] = useState([]);

//     async function fetchForNickname() {
//       const res2 = await fetch(`${backendUrl}/api/v1/users/${dashTweets.userId}`);
//       const data2 = await res2.json();
//       if (!data2.result) setErrorMessage(data2.message || "could not get users");
//     }
//     setUserFetch(data2);
//     console.log(userFetch);

//     fetchForNickname();
//   }, [dashTweets]);
//   return (
//     <>
//       <h2>alo dash</h2>
//       <p style={{ color: "red" }}>{errorMessage}</p>
//       <AddTweet token={token} />
//       <TweetBox nickname={userFetch?.nickname} date={dashTweets?.createdAt} content={dashTweets?.content} />
//     </>
//   );
// };

// export default DashboardPage;
// const DashboardPage = ({ token, user }) => {
//   const [dashTweets, setDashTweets] = useState([]);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [userFetch, setUserFetch] = useState([]);

//   useEffect(() => {
//     async function fetchOnDashboard() {
//       try {
//         const res = await fetch(`${backendUrl}/api/v1/tweets/followingTweets`, {
//           headers: { authorization: `Bearer ${token}` },
//         });
//         const data = await res.json();
//         if (!data.result) {
//           setErrorMessage(data.message || "Could not load tweets");
//         } else {
//           setDashTweets(data.result);
//           setErrorMessage("");
//         }
//       } catch (error) {
//         setErrorMessage("An error occurred while fetching tweets");
//       }
//     }

//     fetchOnDashboard();
//   }, [token]);

//   useEffect(() => {
//     async function fetchForNickname() {
//       if (dashTweets.length > 0) {
//         try {
//           const res2 = await fetch(`${backendUrl}/api/v1/users/${dashTweets.userId}`);
//           const data2 = await res2.json();
//           if (!data2.result) {
//             setErrorMessage(data2.message || "Could not get user");
//           } else {
//             setUserFetch(data2);
//           }
//         } catch (error) {
//           setErrorMessage("An error occurred while fetching the user data");
//         }
//       }
//     }

//     fetchForNickname();
//   }, [dashTweets]);

//   console.log(dashTweets);
//   console.log(userFetch);
//   return (
//     <>
//       <h2>alo dash</h2>
//       <p style={{ color: "red" }}>{errorMessage}</p>
//       <AddTweet token={token} />
//       {dashTweets.map((tweet, index) => (
//         <TweetBox
//           key={index}
//           nickname={userFetch.result?.nickname}
//           date={tweet?.createdAt}
//           content={tweet?.content}
//         />
//       ))}
//     </>
//   );
// };

// export default DashboardPage;

const DashboardPage = ({ token, user }) => {
  const [dashTweets, setDashTweets] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [userFetch, setUserFetch] = useState({});

  useEffect(() => {
    async function fetchOnDashboard() {
      try {
        const res = await fetch(`${backendUrl}/api/v1/tweets/followingTweets`, {
          headers: { authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (!data.result) {
          setErrorMessage(data.message || "Could not load tweets");
        } else {
          setDashTweets(data.result);
          setErrorMessage("");
        }
      } catch (error) {
        setErrorMessage("tweet fetch failed");
      }
    }

    fetchOnDashboard();
  }, [token]);

  useEffect(() => {
    async function fetchForNickname() {
      if (dashTweets.length > 0) {
        try {
          const userPromises = dashTweets.map(async (tweet) => {
            const res2 = await fetch(`${backendUrl}/api/v1/users/${tweet.userId}`);
            const data2 = await res2.json();
            if (!data2.result) {
              throw new Error(data2.message || "Could not get user");
            }
            return { [tweet.userId]: data2.result.nickname };
          });

          const userResults = await Promise.all(userPromises);
          const users = userResults.reduce((acc, user) => ({ ...acc, ...user }), {});
          setUserFetch(users);
        } catch (error) {
          setErrorMessage("An error occurred while fetching the user data");
        }
      }
    }

    fetchForNickname();
  }, [dashTweets]);

  console.log(dashTweets);
  console.log(userFetch);

  return (
    <>
      <h2>alo dash</h2>
      <p style={{ color: "red" }}>{errorMessage}</p>
      <AddTweet token={token} />
      {dashTweets.map((tweet, index) => (
        <TweetBox key={index} nickname={userFetch[tweet.userId]} date={tweet.createdAt} content={tweet.content} />
      ))}
    </>
  );
};

export default DashboardPage;


