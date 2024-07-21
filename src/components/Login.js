import React from "react";
import "../styles/Login.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Login() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="login flex items-center"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ ease: "easeOut", duration: 0.8 }}
    >
      <div className="main">
        <img src={logo} alt="Logo" />
        <div className="container">
          <h1>LOG IN</h1>
          <form>
            <label>E-Mail Address</label>
            <input type="email" placeholder="E-Mail Address" />
            <label>Password</label>
            <input type="password" placeholder="Password" />
            <p>Forgot Password?</p>
            <button className="button" onClick={() => navigate("/uploadNote")}>
              Log In
            </button>
          </form>
        </div>
      </div>
      <div className="sidebar">
        <h2>
          Dont have an
          <br /> account?
        </h2>
        <button className="button" onClick={() => navigate("/Signup")}>
          Sign Up
        </button>
      </div>
    </motion.div>
  );
}

export default Login;
