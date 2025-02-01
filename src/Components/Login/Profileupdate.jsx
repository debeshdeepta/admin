import React, { useState } from "react";
import "./ProfileUpdate.css";
import profilePlaceholder from "../../assets/camera.svg";

const Profileupdate = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="profile-update-wrapper">
      <div className="profile-update-container">
        <div className="profile-update-card">
          <label htmlFor="profile-upload" className="profile-upload-label">
            <img
              src={profileImage || profilePlaceholder}
              alt="Profile"
              className="profile-image"
            />
          </label>
          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            onChange={handleImageUpload}
            hidden
          />
          <p className="upload-text">Upload Profile Picture</p>
          
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="input-field"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="input-field"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="input-field"
          />
          <button className="change-password">Change Password</button>
          <button className="save-button">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Profileupdate;
