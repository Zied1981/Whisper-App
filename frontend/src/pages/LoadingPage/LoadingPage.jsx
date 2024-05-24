import { Navigate } from "react-router-dom";
import "./LoadingPage.css";
const LoadingPage = () => {
  const handleClick = () => {
    window.location.href = "/onboarding";
  };
  return (
    <div className="loading-sec">
      <img src="../../../public/twitter.svg" alt="" />
      <h3>find out what's going on in the world right now</h3>
      <button onClick={handleClick}>continue</button>
    </div>
  );
};

export default LoadingPage;
