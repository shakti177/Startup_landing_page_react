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
          <Link to="/signin"><button className="button1">Sign In</button></Link>
          <Link to="/signup"><button className="button2">Sign Up</button></Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
