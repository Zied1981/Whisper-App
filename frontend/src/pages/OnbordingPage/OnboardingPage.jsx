import NavBar from "../../components/NavBar/NavBar";
import "./OnboardingPage.css";
const OnboardingPage = () => {
  const handleClick = () => {
    window.location.href = "/register";
  };
  return (
    <section className="onboard">
      <dotlottie-player
        src="https://lottie.host/817898c1-8906-4196-b7b4-3efa61477765/HvuOKqKoZf.json"
        background="transparent"
        speed="1"
        style={{
          width: "250px",
          height: "250px",
          margin: "auto",
        }}
        loop
        autoplay
      ></dotlottie-player>
      <h1>Welcome to your Whisper App</h1>
      <button onClick={handleClick}>continue</button>
    </section>
  );
};

export default OnboardingPage;
