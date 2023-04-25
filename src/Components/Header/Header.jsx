import React from "react";
import "./Header.css";
import logo from "../../Assests/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section id="navbar">
      <div className="logo">
        <Link to='/'><img src={logo} alt="" /></Link>
      </div>
      <div className="buttons">
        <div className="button_row">
          <button className="button1">Sign In</button>
          <button className="button2">Sign Up</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
