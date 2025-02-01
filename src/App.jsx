import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import Welcome from "./Components/Login/Welcome";
import Dashboard from "./Components/Dashboard/Dashboard";
import ProfileUpdate from "./Components/Login/Profileupdate";

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("user"); // Check user authentication
  return isAuthenticated ? children : <Navigate to="/" />;
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route path="/welcome" element={<ProtectedRoute><Welcome /></ProtectedRoute>} />
        <Route path="/profileupdate" element={<ProtectedRoute><ProfileUpdate /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

        {/* Default Redirect */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
