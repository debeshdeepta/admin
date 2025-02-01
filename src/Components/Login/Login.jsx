import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Login.css";
import logo from "../../assets/logo.svg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy authentication check (Replace with real API call)
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "XYZ" && password === "0987532345") {
      localStorage.setItem("user", JSON.stringify({ username })); // Store user data
      navigate("/welcome"); // Redirect to Welcome page
    } else {
      alert("Invalid credentials! Please try again.");
    }
  };

  return (
    <div className="login-wrapper">
      {/* Background Image */}
      <div className="login-background"></div>

      {/* Main Login Container */}
      <div className="login-container">
        {/* Left Side - Logo */}
        <div className="login-left">
          <img src={logo} alt="Free Shops Logo" className="login-logo" />
        </div>

        {/* Right Side - Form */}
        <div className="login-right">
          <h2 className="login-title">Log in</h2>
          <p className="login-subtitle">Welcome to Free Shops App Controller</p>

          <form onSubmit={handleLogin}>
            {/* Username Input */}
            <div className="input-group">
              <label htmlFor="username">User Name</label>
              <input type="text" id="username" name="username" defaultValue="XYZ" required />
            </div>

            {/* Password Input */}
            <div className="input-group password-group">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                defaultValue="0987532345"
                required
              />
              <i
                className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </div>

            {/* Forgot Password */}
            <div className="forgot-password">
              <a href="#">Forgot Password</a>
            </div>

            {/* Login Button */}
            <div className="login-button">
              <button type="submit">Log in</button>
            </div>

            {/* Create Account Link */}
            <div className="create-account">
              <a onClick={() => navigate("/register")}>Create New Account</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
