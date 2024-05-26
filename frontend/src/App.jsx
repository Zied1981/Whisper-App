import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";

import { useEffect, useState } from "react";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import AuthRequired from "./components/AuthRequired";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import OnboardingPage from "./pages/OnbordingPage/OnboardingPage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [token, setToken] = useState(); // aktuell verwendete accessToken
  const [user, setUser] = useState();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />

          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path="/login" element={<LoginPage setToken={setToken} setUser={setUser} />} />
          <Route
            path="/dashboard"
            element={
              <AuthRequired token={token}>
                <DashboardPage token={token} user={user} />
              </AuthRequired>
            }
          />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </>
  );
}

export default App;
