import React from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>
          <FaSearch />
        </button>
      </div>
      <div className="user-info">
        <FaBell className="notification-icon" />
        <img
          src="https://storage.googleapis.com/a1aa/image/1jQC4hS7uM6LNkrqd3BOovGSeFF1FKx9XEMBoRQoeOc.jpg"
          alt="User Avatar"
        />
      </div>
    </div>
  );
};

export default Header;
