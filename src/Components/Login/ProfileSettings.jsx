import React from "react";
import "./ProfileSettings.css";
import profileImage from "./image.png";
import frameImage from "./Frame 63.svg";

const ProfileSettings = () => {
  return (
    <div className="profile-container">
      {/* Frame Image Positioned Absolutely */}
      <img src={frameImage} alt="Frame" className="frame-image" />

      {/* Profile Section - Profile on Left, Upload Button on Right */}
      <div className="profile-section">
        {/* Profile Image on Left */}
        <img src={profileImage} alt="Profile" className="profile-image" />

        {/* Upload Button on Right of Profile */}
        <button className="upload-button">Upload New Picture</button>
      </div>

      {/* Form Section */}
      <div className="form-section">
        <h2 className="form-title">Personal Information:</h2>
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input className="form-input" type="text" />
        </div>
        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input className="form-input" type="email" />
        </div>
        <div className="form-group">
          <label className="form-label">Phone Number</label>
          <input className="form-input" type="text" />
        </div>
      </div>

      {/* Password Management */}
      <div className="form-section">
        <h2 className="form-title">Password Management:</h2>
        <div className="form-group">
          <label className="form-label">Old Password</label>
          <input className="form-input" type="password" />
        </div>
        <div className="form-group">
          <label className="form-label">New Password</label>
          <input className="form-input" type="password" />
        </div>
        <div className="form-group">
          <label className="form-label">Confirm New Password</label>
          <input className="form-input" type="password" />
        </div>
      </div>

      {/* Save Button */}
      <div className="save-button-container">
        <button className="save-button">Save Changes</button>
      </div>
    </div>
  );
};

export default ProfileSettings;