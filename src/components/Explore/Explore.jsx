import React from "react";
import "./Explore.scss";
import Card from "../Card/Card";
import data from "../Card/Data";
import arrow from "../../Images/arrow.svg";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <>
      <div className="explore-container">
        <div className="explore-heading">
          <span> Explore Diverse Mentorship Areas</span>
        </div>

        <div className="explore-cards">
          {data.map((item, index) => {
            return <Card Key={index} name={item.name} desc={item.desc} />;
          })}
        </div>

        <div className="explore-container-button">
          <button>
            <Link to="/mentors">
              Find your mentor &nbsp; <img src={arrow} alt="" />
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Explore;
