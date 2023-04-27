import React from "react";
import "./Forget.css";
import { Link } from "react-router-dom";

const Forget = () => {
  return (
    <section className="forget_main">
      <div className="forget_section">
        <div className="forget_content">
          <h1>Forgot your password?</h1>
          <p>We'll email you instructions on how to reset it.</p>
        </div>
        <div className="forget_form_section">
          <form className="forget_form_feilds">
            <div className="forget_feild">
              <label htmlFor="email">Email</label>
              <input type="text" placeholder="you@yourcompany.com" required />
            </div>

            <div className="forget_button">
              <button type="submit">Reset Password</button>
            </div>
          </form>
        </div>
        <div className="forget_last_line">
          <Link to="/signin">
            <span>Cancel</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Forget;
