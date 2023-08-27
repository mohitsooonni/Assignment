import React from "react";
import "./JoinCommunity.scss";
import { Link } from "react-router-dom";
import arrow from "../../Images/arrow.svg";
import community_members from "../../Images/join_community.png";

const JoinCommunity = () => {
  return (
    <>
      <div className="community-container">
        <div className="container-left">
          <img src={community_members} alt="Community members"></img>
        </div>

        <div className="container-right">
          <p className="heading">Join Our Community of Members </p>
          <p className="content">
            Becoming a mentor on Mentor Hub is quick and easy. Follow these steps to get started.
          </p>

          <button className="community-btn">
            <Link to="/signup">
              Learn More &nbsp;
              <img src={arrow} alt="arrow" />
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default JoinCommunity;
