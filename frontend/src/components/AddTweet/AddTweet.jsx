import { useState } from "react";
import "./AddTweet.css";
import { backendUrl } from "../../api/api";

const AddTweet = ({ token, user }) => {
  const [content, setContent] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const addNewTweet = async (e) => {
    e.preventDefault();

    const newTweet = {
      content: content,
    };

    const response = await fetch(`${backendUrl}/api/v1/tweets`, {
      method: "POST",
      headers: { "Content-Type": "application/json", authorization: `Bearer ${token}` },
      body: JSON.stringify(newTweet),
    });
    const data = await response.json();
    if (!data.result) {
      setErrorMessage(data.message || "Posting failed");
    } else {
      setContent("");
    }
  };

  return (
    <div>
      <h2>add tweet</h2>
      <form>
        <p style={{ color: "red" }}>{errorMessage}</p>
        <textarea
          placeholder="Gib etwas ein.."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button onClick={addNewTweet}>Posten</button>
      </form>
    </div>
  );
};

export default AddTweet;
