import "./TweetBox.css";

const TweetBox = ({ nickname, date, content }) => {
  return (
    <article className="tweet-box">
      <div className="tweet-header">
        <p className="tweet-name">{nickname}</p>
        <div className="tweet-date-flex">
          <p className="tweet-date">{date.slice(2, 10)}</p>
          <p className="tweet-time">{date.slice(11, 16)}Uhr</p>
        </div>
      </div>
      <p className="tweet-content">{content}</p>
      <div>
        <p></p>
        <p></p>
      </div>
    </article>
  );
};

export default TweetBox;
