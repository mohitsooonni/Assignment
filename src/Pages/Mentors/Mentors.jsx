import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Mentors.scss";
import MentCards from "../../components/MentorCards/Mentcard";
import cardData from "../../components/MentorCards/data";
import Footer from "../../components/Footer/Footer";

const Mentors = () => {
  return (
    <>
      <Navbar />
      <div className="heading">
        <p>Our Mentors</p>
      </div>

      <div className="card-section">
        {cardData.map((item, index) => {
          return (
            <MentCards
              key={index}
              imgsrc={item.imgsrc}
              name={item.name}
              role={item.role}
              fb={item.fb}
              twitter={item.twitter}
              linkedin={item.linkedin}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Mentors;
