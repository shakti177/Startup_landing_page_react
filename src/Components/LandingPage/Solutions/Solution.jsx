import React from "react";
import "./Solution.css";
import { TiTick } from "react-icons/ti";
import solution1 from "../../../Assests/solution1.png";
import solution2 from "../../../Assests/solution2.png";
import solution3 from "../../../Assests/solution3.png";

const Solution = () => {
  return (
    <section id="solution_section">
      <div className="solution_container">
        {/* Heading */}

        <div className="solution_headings">
          <button>Reach goals that matter</button>
          <h2>One product, unlimited solution</h2>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit laborum — semper quis lectus nulla.
          </p>
        </div>

        {/* solution 1 */}

        <div className="solution_box">
          <div className="solution_box_left">
            <p class="font-change">More speed. Less spend</p>
            <h3>Keep projects on schedule</h3>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h4>
            <div className="solution_box_left-list">
              <div className="list">
                <TiTick className="list_icon_color" />{" "}
                <p>Duis aute irure dolor in reprehenderit</p>
              </div>
              <div className="list">
                <TiTick className="list_icon_color" />{" "}
                <p>Duis aute irure dolor in reprehenderit</p>
              </div>
              <div className="list">
                <TiTick className="list_icon_color" />{" "}
                <p>Duis aute irure dolor in reprehenderit</p>
              </div>
            </div>
          </div>
          <div className="solution_box_right">
            <img src={solution1} alt="" />
          </div>
        </div>

        {/* solution 2 */}

        <div className="solution_box_reverse">
          <div className="solution_box_left">
            <p class="font-change">More speed. Less spend</p>
            <h3>Keep projects on schedule</h3>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h4>
            <div className="solution_box_left-list">
              <div className="list">
                <TiTick className="list_icon_color" />{" "}
                <p>Duis aute irure dolor in reprehenderit</p>
              </div>
              <div className="list">
                <TiTick className="list_icon_color" />{" "}
                <p>Duis aute irure dolor in reprehenderit</p>
              </div>
              <div className="list">
                <TiTick className="list_icon_color" />{" "}
                <p>Duis aute irure dolor in reprehenderit</p>
              </div>
            </div>
          </div>
          <div className="solution_box_right">
            <img src={solution2} alt="" />
          </div>
        </div>

        {/* solution 3 */}

        <div className="solution_box">
          <div className="solution_box_left">
            <p class="font-change">More speed. Less spend</p>
            <h3>Keep projects on schedule</h3>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h4>
            <div className="solution_box_left-list">
              <div className="list">
                <TiTick className="list_icon_color" />{" "}
                <p>Duis aute irure dolor in reprehenderit</p>
              </div>
              <div className="list">
                <TiTick className="list_icon_color" />{" "}
                <p>Duis aute irure dolor in reprehenderit</p>
              </div>
              <div className="list">
                <TiTick className="list_icon_color" />{" "}
                <p>Duis aute irure dolor in reprehenderit</p>
              </div>
            </div>
          </div>
          <div className="solution_box_right">
            <img src={solution3} alt="" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Solution;
