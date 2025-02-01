import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Register.css";
import logo from "../../assets/logo.svg";
import axios from 'axios';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRegister = async(e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Basic validation
    if (!name || !email || !phone || !password || !confirmPassword) {
      alert("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post(
        `http://localhost:8082/api/v1/auth/register`, {
          name, 
          email, 
          phone, 
          password
        });
      if (res && res.data.success){
        alert("Account created successfully! Redirecting to login...");
        navigate("/");
      } else {
        alert("Failed to create account");
      }

    } catch (error){
      console.log(error);
      alert("Something went wrong");
    }

  };

  return (
    <div className="register-wrapper">
      {/* Background Image */}
      <div className="register-background"></div>

      {/* Main Register Container */}
      <div className="register-container">
        {/* Left Side - Logo */}
        <div className="register-left">
          <img src={logo} alt="Free Shops Logo" className="register-logo" />
        </div>

        {/* Right Side - Form */}
        <div className="register-right">
          <h2 className="register-title">Create New Account</h2>
          <p className="register-subtitle">Welcome to Free Shops App Controller</p>

          <form onSubmit={handleRegister}>
            <div className="input-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="XYZ" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="xyz@gmail.com" required />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="0987654321" required />
            </div>
            <div className="input-group password-group">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="••••••"
                required
              />
              <i
                className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </div>
            <div className="input-group password-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="••••••"
                required
              />
              <i
                className={`fas ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              ></i>
            </div>
            <div className="register-button">
              <button type="submit">Create Account</button>
            </div>
            <div className="login-link">
              <a onClick={() => navigate("/")}>Already have an account?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
