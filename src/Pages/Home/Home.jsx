import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Explore from "../../components/Explore/Explore";

import About from "../About/About";
import Container from "../../components/Container/Container";
import JoinCommunity from "../../components/JoinCommunity/JoinCommunity";
import Footer from "../../components/Footer/Footer";
import Testimonial from "../Testimonials/Testimonial";

const Home = () => {
  return (
    <>
      <Navbar className="navbar" />
      <Container />
      <About />
      <Explore />
      <JoinCommunity />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
