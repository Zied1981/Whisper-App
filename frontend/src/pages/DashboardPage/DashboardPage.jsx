import AddTweet from "../../components/AddTweet/AddTweet";
import "./DashboardPage.css";

const DashboardPage = ({ token, user }) => {
  return (
    <>
      <h2>alo dash</h2>
      <AddTweet token={token} />
    </>
  );
};

export default DashboardPage;
