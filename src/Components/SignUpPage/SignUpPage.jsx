import React from "react";
import "./SignUpPage.css";
import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section id="signupmain">
      <div className="signup_section">
        <div className="signup_content">
          <h1>Welcome. We exist to make entrepreneurship easier.</h1>
        </div>
        <div className="signup_form">
          <div className="signup_form_content">
            <button className="signup_form_button">
              <BsGoogle className="signup_form_icon" />
              <p>Sign up with Google</p>
            </button>

            <div className="signup_form_line1">
              <div className="signup_hr_line1">
                <hr />
              </div>

              <div className="signup_line1_content">
                <p>Or, register with your email</p>
              </div>

              <div className="signup_hr_line1">
                <hr />
              </div>
            </div>

            <form className="signup_form_feilds">
              <div className="feild">
                <label htmlFor="name">
                  Full Name<span style={{ color: "red" }}> *</span>
                </label>
                <input type="text" placeholder="First and Last Name" required />
              </div>

              <div className="feild">
                <label htmlFor="company">
                  Company Name<span style={{ color: "red" }}> *</span>
                </label>
                <input
                  type="text"
                  placeholder="Your company or app name"
                  required
                />
              </div>

              <div className="feild">
                <label htmlFor="email">
                  Work Email<span style={{ color: "red" }}> *</span>
                </label>
                <input type="text" placeholder="you@yourcompany.com" required />
              </div>

              <div className="feild">
                <label htmlFor="password">
                  Password<span style={{ color: "red" }}> *</span>
                </label>
                <input
                  type="password"
                  placeholder="Password (at least 10 characters)"
                  required
                />
              </div>

              <div className="signup_form_line2">
                <div className="signup_form2_content">
                  <p>
                    I agree to be contacted by Open PRO about this offer as per
                    the Open PRO <u>Privacy Policy</u>.
                  </p>
                </div>
              </div>

              <div className="signup_form_button-2">
                <button type="submit">Sign up</button>
              </div>

            </form>

            <div className="signup_last_line">
              <p>Already using Open PRO?</p>
              <Link to="/signin"><span>Sign in</span></Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
