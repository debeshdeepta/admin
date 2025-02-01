import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Welcome.css";
import logo from "../../assets/logo.svg";

const Welcome = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="welcome-wrapper">
      {/* Background Image */}
      <div className="welcome-background"></div>

      {/* Main Welcome Container */}
      <div className="welcome-container">
        {/* Right Side - Welcome Message */}
        <div className="welcome-right">
          <img src={logo} alt="Company Logo" className="welcome-logo" />
          <h2 className="welcome-title">Welcome</h2>
          <p className="welcome-subtitle" style={{ color: "#FF8553" }}>
            to the Free Shops App Admin Panel
          </p>
          <p className="welcome-description" style={{ color: "#7F7F7F" }}>
            Manage and monitor all aspects of your app seamlessly from one place. Use the tools below to get started.
          </p>
          <button
            className="welcome-button"
            style={{
              backgroundColor: "#199FB1",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/dashboard")} // Navigate to Dashboard
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
