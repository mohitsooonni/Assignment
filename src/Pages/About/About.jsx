import React from "react";
import "./About.scss";
import { Link } from "react-router-dom";
import about from "../../Images/About.jpg";
import arrow from "../../Images/arrow.svg";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-container-left">
          <div className="about-container-left-main">
            <p className="heading">At Mentor Hub</p>
            <p className="para">
              we believe in the power of mentorship. We provide a platform where passionate individuals like you can
              share your expertise and make a positive impact on others. Whether you're an experienced professional, an
              industry expert, or a seasoned entrepreneur, Mentor Hub offers you the opportunity to connect with
              mentees, guide them on their journey, and shape their future.
            </p>
            <button>
              <Link to="/areas">
                Learn More &nbsp; <img src={arrow} alt="" />
              </Link>
            </button>
          </div>
        </div>
        <div className="about-container-right">
          <img className="about-container-right-img" src={about} alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
