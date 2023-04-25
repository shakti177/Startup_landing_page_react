import React from "react";
import "./Feature.css";
import { AiOutlineStar } from "react-icons/ai";
import { BsCardText } from "react-icons/bs";
import { SlGlobe } from "react-icons/sl";
import { FaHeadSideVirus } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";

const Feature = () => {
  return (
    <section id="feature_main">
      <div className="feature_section">
        <div className="feature_text">
          <h2>The majority our customers do not understand their workflows.</h2>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="feature_container">

        {/* row 1 */}

          <div className="feature_container_row">
            {/* col 1 */}

            <div className="column">
              <div className="column_icon">
                <AiOutlineStar className="icon" />
              </div>
              <div className="column_text">
                <h4>Instant Features</h4>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat.
                </p>
              </div>
            </div>

            {/* col 2 */}

            <div className="column">
              <div className="column_icon">
                <BsCardText className="icon" />
              </div>
              <div className="column_text">
                <h4>Instant Features</h4>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat.
                </p>
              </div>
            </div>

            {/* col 3 */}

            <div className="column">
              <div className="column_icon">
                <SlGlobe className="icon" />
              </div>
              <div className="column_text">
                <h4>Instant Features</h4>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat.
                </p>
              </div>
            </div>
          </div>


          {/* row 2 */}

          <div className="feature_container_row">
            {/* col 4 */}

            <div className="column">
              <div className="column_icon">
                <FaHeadSideVirus className="icon" />
              </div>
              <div className="column_text">
                <h4>Instant Features</h4>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat.
                </p>
              </div>
            </div>

            {/* col 5 */}

            <div className="column">
              <div className="column_icon">
                <BiLike className="icon" />
              </div>
              <div className="column_text">
                <h4>Instant Features</h4>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat.
                </p>
              </div>
            </div>

            {/* col 6 */}

            <div className="column">
              <div className="column_icon">
                <FaRegCommentDots className="icon" />
              </div>
              <div className="column_text">
                <h4>Instant Features</h4>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Feature;
