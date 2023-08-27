import React from "react";
import "./Testimonial.scss";
import TestCard from "./TestCard";
import data from "./data.jsx";

const Testimonial = () => {
  return (
    <>
      <div className="test-container">
        <p className="test-heading">Hear from our Mentors</p>

        <div className="test">
          {data.map((item, index) => {
            return <TestCard key={index} img={item.img} name={item.name} loc={item.loc} desc={item.desc} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
