import React, { useState } from "react";
import "./Signup.scss";
import DefaultPic from "../../Images/Default.png";
import arrow from "../../Images/arrow.svg";

const SignUp = () => {
  const [file, setFile] = useState(DefaultPic);

  return (
    <>
      <div className="signup">
        <div className="info">
          <p>Personal Information :</p>
          <div className="personal-section">
            <div className="photo-section">
              <div className="show-image">
                <img src={file} alt="pic-to-upload" />

                <input
                  type="file"
                  className="file-input"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(URL.createObjectURL(e.target.files[0]))}
                  placeholder="Upload Photo"
                />
                <label onClick={() => document.querySelector(".file-input").click()}>Upload Photo</label>
              </div>
            </div>

            <div className="input-section">
              <input type="text" required placeholder="Full Name" />
              <input type="text" required placeholder="Email Address" />
              <input type="text" required placeholder="Phone number" />
              <input type="text" required placeholder="Dob" />
            </div>
          </div>
        </div>

        <div className="expertise">
          <p>Areas of Expertise :</p>

          <div className="expertise-section">
            <select name="category" selected="category" required>
              <option value="category">Category </option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
            </select>
            <select name="subcategory" selected="subcategory">
              <option value="subcategory">Sub category </option>
              <option value="subcategory2">Sub Category 2</option>
              <option value="subcategory3">Sub Category 3</option>
            </select>
          </div>
        </div>

        <div className="availability">
          <p>Availability :</p>
          <select required name="availabledays" selected="availabledays">
            <option value="availabledays">Available Days</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <div className="about-experience">
          <p>About Experience :</p>
          <textarea name="" id="" cols="30" rows="10" required></textarea>
        </div>
        <div className="button">
          <button>
            Register <img src={arrow} alt="arrow" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
