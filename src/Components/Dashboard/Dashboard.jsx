import React from 'react';
import logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser, faTachometerAlt, faUsers, faStar, faCog, faHistory, faList, faChartLine, faMoneyBillWave, faLayerGroup, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.css";
import UserManagement from './UserManagemet';
import Analytics from './Analytics';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="sidebar-header">
                    <img alt="Logo" className="logo" height="50" src={logo} width="50" />
                    <span className="logo-text">Logo</span>
                </div>
                <nav>
                    <ul>
                        <li className="sidebar-item">
                            <a className="sidebar-link active" href="#">
                                <FontAwesomeIcon icon={faTachometerAlt} className="icon" />
                                Dashboard
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="#">
                                <FontAwesomeIcon icon={faUsers} className="icon" />
                                User Management
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="#">
                                <FontAwesomeIcon icon={faStar} className="icon" />
                                Rating and Review
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="#">
                                <FontAwesomeIcon icon={faCog} className="icon" />
                                Settings
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="#">
                                <FontAwesomeIcon icon={faHistory} className="icon" />
                                History
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="#">
                                <FontAwesomeIcon icon={faList} className="icon" />
                                All Bookings
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="#">
                                <FontAwesomeIcon icon={faCommentDots} className="icon" />
                                Push Notification
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="#">
                                <FontAwesomeIcon icon={faMoneyBillWave} className="icon" />
                                Transaction List
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="#">
                                <FontAwesomeIcon icon={faChartLine} className="icon" />
                                Google Analytics
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="#">
                                <FontAwesomeIcon icon={faLayerGroup} className="icon" />
                                Category
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <div className="main-content">
                {/* Header Section */}
                <div className="header">
                    <div className="search-container">
                        <input type="text" placeholder="Search user by their name" className="search-bar" />
                        <button className="search-btn">Search</button>
                    </div>
                    <div className="icons-container">
                        <FontAwesomeIcon icon={faBell} className="notification-icon" />
                        <FontAwesomeIcon icon={faUser} className="user-icon" />
                    </div>
                </div>

                <h1>Welcome to the Dashboard!</h1>
                <Analytics/>
                <UserManagement />
            </div>
        </div>
    );
};

export default Dashboard;
