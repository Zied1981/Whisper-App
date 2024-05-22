import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(); // aktuell verwendete accessToken
  const [user, setUser] = useState();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/login"
          element={<LoginPage setToken={setToken} setUser={setUser} />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route
          path="/dashboard"
          element={
            <AuthRequired token={token} setToken={setToken}>
              <DashboardPage token={token} user={user} />
            </AuthRequired>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
