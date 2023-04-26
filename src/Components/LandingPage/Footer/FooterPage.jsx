import React from "react";
import "./FooterPage.css";
import logo from "../../../Assests/logo.png";

import {
  FaTwitter,
  FaGithub,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const FooterPage = () => {
  return (
    <section id="footer">
      <div className="footer_section">
        <div className="footer_section_main">
          <div className="footer_description">
            <img src={logo} alt="" />
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
          </div>

          <div className="footer_links">
            <p>Products</p>
            <ul>
              <li>Web Studio</li>
              <li>DynamicBox Flex</li>
              <li>Programming Forms</li>
            </ul>
          </div>

          <div className="footer_links">
            <p>Resources</p>
            <ul>
              <li>Nostrud exercitation</li>
              <li>Visual mockups</li>
              <li>Nostrud exercitation</li>
              <li>Visual mockups</li>
              <li>Nostrud exercitation</li>
            </ul>
          </div>

          <div className="footer_links">
            <p>Company</p>
            <ul>
              <li>Consectetur adipiscing</li>
              <li>Labore et dolore</li>
              <li>Consectetur adipiscing</li>
              <li>Labore et dolore</li>
              <li>Consectetur adipiscing</li>
            </ul>
          </div>
        </div>

        <div className="footer_copyright">
          <div className="copyright_text">
            <p>© demowebsite.com. All rights reserved.</p>
          </div>
          <div className="copyright_socialmedia">
            <div className="icon_bg">
              <FaTwitter className="icon_cr" />
            </div>
            <div className="icon_bg">
              <FaGithub className="icon_cr" />
            </div>
            <div className="icon_bg">
              <FaFacebookF className="icon_cr" />
            </div>
            <div className="icon_bg">
              <FaInstagram className="icon_cr" />
            </div>
            <div className="icon_bg">
              <FaLinkedin className="icon_cr" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterPage;
