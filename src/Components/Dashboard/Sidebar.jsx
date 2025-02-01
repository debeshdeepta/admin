import React from "react";

import { 
  FaTachometerAlt, FaUsers, FaStar, FaCog, FaHistory, 
  FaBook, FaBell, FaList, FaChartLine, FaDollarSign, 
  FaTags, FaComments, FaBox, FaShareAlt, FaMapMarkerAlt 
} from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  const menuItems = [
    { icon: <FaTachometerAlt />, text: "Dashboard", active: true },
    { icon: <FaUsers />, text: "User Management" },
    { icon: <FaStar />, text: "Rating and Review" },
    { icon: <FaCog />, text: "Settings" },
    { icon: <FaHistory />, text: "History" },
    { icon: <FaBook />, text: "All Bookings" },
    { icon: <FaBell />, text: "Push Notification" },
    { icon: <FaList />, text: "Transaction List" },
    { icon: <FaChartLine />, text: "Google Analytics" },
    { icon: <FaDollarSign />, text: "Multi-Currency" },
    { icon: <FaTags />, text: "Category" },
    { icon: <FaComments />, text: "Live Chat History" },
    { icon: <FaBox />, text: "Package Plan" },
    { icon: <FaShareAlt />, text: "Referral History" },
    { icon: <FaMapMarkerAlt />, text: "Google Map" },
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <img src="https://storage.googleapis.com/a1aa/image/kVcNEeLJa2sv6SJzlz5rFpm4wUo00libOD9wpvMfl2A.jpg" alt="Logo" />
        <span>Logo</span>
      </div>
      <nav>
        <ul>
          {menuItems.map(({ icon, text, active }, index) => (
            <li key={index} className={active ? "active" : ""}>
              <a href="#">
                <span className="icon">{icon}</span>
                <span>{text}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
