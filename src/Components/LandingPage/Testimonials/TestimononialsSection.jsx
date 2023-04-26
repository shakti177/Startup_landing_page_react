import React from "react";
import "./TestimononialsSection.css";
import testimg1 from "../../../Assests/testimonial-01.jpg";
import testimg2 from "../../../Assests/testimonial-02.jpg";
import testimg3 from "../../../Assests/testimonial-03.jpg";

import { VscQuote } from "react-icons/vsc";

const TestimononialsSection = () => {
  return (
    <section id="testimonials_main">
      <div className="testimonials_section">
        <div className="testimonials_heading">
          <h2>Don't take our word for it</h2>
          <p>
            Vitae aliquet nec ullamcorper sit amet risus nullam eget felis
            semper quis lectus nulla at volutpat diam ut venenatis tellus—in
            ornare.
          </p>
        </div>

        {/* Testimonials_boxes */}

        <div className="testimonial_row">

          {/* col 1 */}

          <div className="testimonial_column">
            <div className="user_row">
              <div className="user_img">
                <img src={testimg1} alt="" />
              </div>
              <div className="user_quote">
                <VscQuote className="quote" />
              </div>
            </div>
            <div className="column_content">
              <p>
                — Open PRO lets me quickly get the insights I care about so that
                I can focus on my productive work. I've had Open PRO for about
                24 hours now and I honestly don't know how I functioned without
                it before.
              </p>
            </div>
            <div className="line"></div>
            <div className="column_footer">
              <p>Anastasia Dan - <span>UX Board</span></p>
            </div>
          </div>

          {/* col 2 */}

          <div className="testimonial_column">
            <div className="user_row">
              <div className="user_img">
                <img src={testimg2} alt="" />
              </div>
              <div className="user_quote">
                <VscQuote className="quote" />
              </div>
            </div>
            <div className="column_content">
              <p>
                — Open PRO lets me quickly get the insights I care about so that
                I can focus on my productive work. I've had Open PRO for about
                24 hours now and I honestly don't know how I functioned without
                it before.
              </p>
            </div>
            <div className="line"></div>
            <div className="column_footer">
              <p>Anastasia Dan - <span>UX Board</span></p>
            </div>
          </div>

          {/* col 3 */}

          <div className="testimonial_column">
            <div className="user_row">
              <div className="user_img">
                <img src={testimg3} alt="" />
              </div>
              <div className="user_quote">
                <VscQuote className="quote" />
              </div>
            </div>
            <div className="column_content">
              <p>
                — Open PRO lets me quickly get the insights I care about so that
                I can focus on my productive work. I've had Open PRO for about
                24 hours now and I honestly don't know how I functioned without
                it before.
              </p>
            </div>
            <div className="line"></div>
            <div className="column_footer">
              <p>Anastasia Dan - <span>UX Board</span></p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimononialsSection;
