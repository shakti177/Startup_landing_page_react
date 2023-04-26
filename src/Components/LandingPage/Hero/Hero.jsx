import React from "react";
import "./Hero.css";
import heroimg from "../../../Assests/hero-image-01.jpg";
import playbutton from "../../../Assests/play.gif";

const Hero = () => {
  return (
    <section className="herosection">
      <div className="hero_text">
        <h2>Landing template for startups</h2>
        <p>
          Our landing page template works on all devices, so you only have to
          set it up once, and get beautiful results forever.
        </p>
        <div className="HomeButton_row">
          <button className="homebutton1">Start free trial</button>
          <button className="homebutton2">Learn more</button>
        </div>
      </div>
      <div className="hero_img">
        <img src={heroimg} alt="" />
        <a href="https://www.youtube.com/watch?v=yeiYJ57DrH4&ab_channel=MyFirstMillion" target="_blank" rel="noreferrer"><img src={playbutton} alt="" className="playbuttonimg"/></a>
      </div>
    </section>
  );
};

export default Hero;
