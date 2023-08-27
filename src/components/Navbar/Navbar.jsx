import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import Logo from "../../Images/Logo.png";
import user_profile from "../../Images/user_profile.svg";

const Navbar = () => {
  return (
    <div>
      <>
        <nav className="navbar">
          <Link to="/">
            <img src={Logo} alt="logo" className="logo" />
          </Link>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/mentors">Mentors</Link>
            </li>
            <li>
              <Link to="./testimonial">Sessions</Link>
            </li>
          </ul>

          <button>
            <img src={user_profile} alt="User Icon" />
            <Link to="/signup">Sign up</Link>
          </button>
        </nav>
      </>
    </div>
  );
};

export default Navbar;
