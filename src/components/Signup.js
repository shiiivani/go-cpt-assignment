import React from "react";
import "../styles/Signup.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Signup() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="signup flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 0.6 }}
    >
      <div className="sidebar">
        <h2>
          Already have an
          <br /> account?
        </h2>
        <button className="button" onClick={() => navigate("/Login")}>
          Log In
        </button>
      </div>
      <div className="main">
        <img src={logo} alt="Logo" />
        <div className="container">
          <h1>SIGN UP</h1>
          <form>
            <label>Name</label>
            <input type="text" placeholder="Name" />
            <label>E-Mail Address</label>
            <input type="email" placeholder="E-Mail Address" />
            <label>Password</label>
            <input type="password" placeholder="Password" />
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm Password" />
            <button className="button" onClick={() => navigate("/uploadNote")}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Signup;
