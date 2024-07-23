import React, { useState } from "react";
import "../styles/ChangePassword.css";
import "../styles/SecondNavbar.css";
import logout from "../assets/leave.png";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function ChangePassword() {
  const [isOn, setIsOn] = useState(true);
  const navigate = useNavigate();

  const toggleButton = () => {
    setIsOn(!isOn);
  };

  return (
    <motion.div
      className={`changePassword ${isOn ? "on" : "off"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 0.6 }}
    >
      <div className="second-navbar flex items-center justify-between">
        <img
          src={logout}
          alt="Log out icon"
          width="40px"
          onClick={() => navigate("/")}
        />
        <img src={logo} alt="Logo" width="150px" />
        <img
          src={profile}
          alt="Profile Icon"
          width="40px"
          onClick={() => navigate("/profile")}
        />
      </div>
      <div className="toggle-container">
        <div
          className={`toggle-switch ${isOn ? "on" : "off"}`}
          onClick={toggleButton}
        >
          <div className={`toggle-circle-container ${isOn ? "on" : "off"}`}>
            <div
              className={`toggle-switch-circle ${isOn ? "on" : "off"}`}
            ></div>
          </div>
        </div>
      </div>
      <div className="container">
        <h1>CHANGE PASSWORD</h1>
        <form>
          <label className={isOn ? "on" : "off"}>Old Password</label>
          <input type="password" placeholder="Old Password" />
          <label className={isOn ? "on" : "off"}>New Password</label>
          <input type="password" placeholder="New Password" />
          <p className={isOn ? "on" : "off"}>Forgot Password?</p>
          <button className="button">Update Details</button>
        </form>
      </div>
      <button className={`back-btn ${isOn ? "on" : "off"}`}>Back</button>
    </motion.div>
  );
}

export default ChangePassword;
