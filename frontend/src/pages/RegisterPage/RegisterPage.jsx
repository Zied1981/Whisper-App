import { useState } from "react";
import "./RegisterPage.css";
import { Link } from "react-router-dom";
import { backendUrl } from "../../api/api";

const RegisterPage = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();

    const res = await fetch(`${backendUrl}/api/v1/users/register`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ nickname, email, password }),
    });

    const data = await res.json();
    if (!data.result) {
      setErrorMessage(data.message || "Failed to register, please try again");
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <section className="register-page">
      <h2>Create an account</h2>
      <form>
        <p style={{ color: "red" }}>{errorMessage}</p>
        <input
          type="text"
          placeholder="Nickname123"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <input
          type="email"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password123"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={registerUser}> Continue</button>
      </form>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </section>
  );
};

export default RegisterPage;
