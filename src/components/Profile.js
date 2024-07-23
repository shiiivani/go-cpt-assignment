import React, { useState } from "react";
import "../styles/Profile.css";
import userImg from "../assets/user.png";
import { useNavigate } from "react-router-dom";
import "../styles/SecondNavbar.css";
import logout from "../assets/leave.png";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import { motion } from "framer-motion";

function Profile() {
  const [isOn, setIsOn] = useState(true);
  const navigate = useNavigate();

  const toggleButton = () => {
    setIsOn(!isOn);
  };

  return (
    <motion.div
      className={`profile ${isOn ? "on" : "off"}`}
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
        <div className="relative">
          <img src={userImg} alt="A women in doctor's uniform" width="200px" />
          <h1>ADMINISTRATOR</h1>
        </div>
        <form>
          <label className={isOn ? "on" : "off"}>E-Mail Address</label>
          <input type="email" placeholder="E-Mail Address" />
          <label className={isOn ? "on" : "off"}>Phone Number</label>
          <input type="number" placeholder="Phone Number" />
          <p
            className={isOn ? "on" : "off"}
            onClick={() => navigate("/changePassword")}
          >
            Change Password?
          </p>
          <button className="button">Update Details</button>
        </form>
      </div>
      <button className={`back-btn ${isOn ? "on" : "off"}`}>Back</button>
    </motion.div>
  );
}

export default Profile;
