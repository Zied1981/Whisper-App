import { useState } from "react";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { backendUrl } from "../../api/api";

const LoginPage = ({ setToken, setUser }) => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch(`${backendUrl}/api/v1/users/login`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ nickname, password }),
      // credentials: "include",
    });

    const data = await res.json();

    if (!data.result) {
      setErrorMessage(
        data.message || "Failed to login,please try again"
        /*   navigate("/register") */
      );
    } else {
      navigate("/dashboard");
    }

    setToken(data.result.tokens.accessToken);
    setUser(data.result.user);
  };

  return (
    <main>
      <h1>Login</h1>
      <form>
        <p style={{ color: "red" }}>{errorMessage}</p>
        <div>
          <input
            placeholder="Nickname123"
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password123"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={loginUser}>Login</button>
      </form>

      <p>
        Don't have an account yet? <Link to="/register">Create Account</Link>
      </p>
    </main>
  );
};

export default LoginPage;
