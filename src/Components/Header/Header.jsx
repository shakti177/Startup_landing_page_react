import React from "react";
import "./Header.css";
import logo from '../../Assests/logo.png'

const Header = () => {
  return (
    <section id="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="buttons">
        <div className="button_row">
          <button className="button1">
            Sign In
          </button>
          <button className="button2">Sign Up</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
