import React from "react";
import "../styles/Footer.css";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="footer flex items-end justify-between">
      <div>
        <img src={logo} alt="Logo" width="200px" />
        <p>
          We are not here to sell you products, we sell value
          <br /> through our expertise.
        </p>
        <p>
          Email:{" "}
          <a href="" target="_blank">
            info@gocpt.ai
          </a>
        </p>
        <p>© 2024 All rights reserved gocpt.ai</p>
      </div>
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Terms & Conditions</li>
      </ul>
    </div>
  );
}

export default Footer;
