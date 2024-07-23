import React, { useState } from "react";
import "../styles/UploadNote.css";
import "../styles/SecondNavbar.css";
import logout from "../assets/leave.png";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function UploadNote() {
  const [isOn, setIsOn] = useState(true);
  const navigate = useNavigate();

  const toggleButton = () => {
    setIsOn(!isOn);
  };

  return (
    <motion.div
      className={`upload-note ${isOn ? "on" : "off"}`}
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
      <div className={`first-container container ${isOn ? "on" : "off"}`}>
        <h1 className={isOn ? "on" : "off"}>Upload your Note</h1>
        <p className={isOn ? "on" : "off"}>
          (It may take 30-90 seconds to generate report)
        </p>
        <input type="file" id="file-upload" style={{ display: "none" }} />
        <label htmlFor="file-upload">
          Click to upload a Note (pdf or doc file)
        </label>
        <button className="button">
          Generate CPT code
          <br />
          Based upon Medical Decision Making Model
        </button>
      </div>
      <div className={`second-container container ${isOn ? "on" : "off"}`}>
        <div className="inner-container flex  justify-between">
          <div
            className={`inner-containers flex items-center justify-between ${
              isOn ? "on" : "off"
            }`}
          >
            <p>
              Number and Complexity
              <br /> of Problems Addressed
            </p>
            <h3>MEDIUM</h3>
          </div>
          <div
            className={`inner-containers flex items-center justify-between ${
              isOn ? "on" : "off"
            }`}
          >
            <p>
              Amount and/or Complexity of Data
              <br /> to be Reviewed and Analyzed
            </p>
            <h3>MINIMAL</h3>
          </div>
          <div
            className={`inner-containers flex items-center justify-between ${
              isOn ? "on" : "off"
            }`}
          >
            <p>
              Risk of Complications and/or
              <br /> Morbidity or Mortality of Patient
              <br /> Management Decisions
            </p>
            <h3>HIGH</h3>
          </div>
        </div>
        <button className="button">GENERATE MDM CPT CODE</button>
        <button className={`grey-btn ${isOn ? "on" : "off"}`}>MEDIUM</button>
        <div className="form-container flex justify-between">
          <div className="form">
            <label>New or Existing Patient</label>
            <input
              className={isOn ? "on" : "off"}
              type="text"
              placeholder="Choose an Option"
            />
            <button className="button">SUBMIT</button>
            <p className={isOn ? "on" : "off"}>99214</p>
          </div>
          <div className="form">
            <label>Get Code Based Upon Time</label>
            <input
              className={isOn ? "on" : "off"}
              type="text"
              placeholder="Choose an Option"
            />
            <button className="button">SUBMIT</button>
            <p className={isOn ? "on" : "off"}>99242</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default UploadNote;
