import React from "react";
import "./SignInPage.css";
import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <section id="signin_main">
      <div className="signin_section">
        <div className="signin_content">
          <h1>Welcome back. We exist to make entrepreneurship easier.</h1>
        </div>
        <div className="signin_form">
          <div className="signin_form_content">
            <button className="form_button">
              <BsGoogle className="form_icon" />
              <p>Sign in with Google</p>
            </button>

            <div className="form_line1">
              <div className="hr_line1">
                <hr />
              </div>
              <div className="line1_content">
                <p>Or, sign in with your email</p>
              </div>
              <div className="hr_line1">
                <hr />
              </div>
            </div>

            <form className="form_feilds">
              <div className="feild_one">
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="you@yourcompany.com" />
              </div>

              <div className="feild_one">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Password (at least 10 characters)"
                />
              </div>

              <div className="form_line2">
                <div className="radio_button">
                  <input type="checkbox" />
                  <p>Keep me signed in</p>
                </div>
                <div className="form2_content">
                <Link to="/reset-password"><p>Forgot Password?</p></Link>
                </div>
              </div>

              <div className="form_button-2">
                <button>Sign in</button>
              </div>
            </form>
            <div className="signin_last_line">
              <p>Don’t you have an account?</p>
              <Link to="/signup"><span>Sign up</span></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
