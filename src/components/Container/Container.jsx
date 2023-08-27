import React from "react";
import "./Container.scss";
import arrow from "../../Images/arrow.svg";
import Homepage_girl from "../../Images/Homepage_girl.png";
import { Link } from "react-router-dom";

const Container = () => {
  return (
    <>
      <div className="container"></div>
      <div className="contents">
        <div className="text">
          <div className="heading">
            <p>
              "Unlock your potential as a <span>Mentor</span> and empower others to thrive."
            </p>
          </div>
          <div className="buttons">
            <button>
              <Link to="/about">
                Get Started as a Mentor &nbsp; <img src={arrow} alt="" />
              </Link>
            </button>
            <button>
              <Link to="/about">
                Learn More &nbsp; <img src={arrow} alt="" />
              </Link>
            </button>
          </div>
        </div>
        <div>
          <img className="girl-image" src={Homepage_girl} alt="Girl with book" />
        </div>
      </div>
    </>
  );
};

export default Container;
