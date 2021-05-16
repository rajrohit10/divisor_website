import React from "react";
import "./style.css";
const AboutUs = () => {
  return (
    <div className="margin-extra">
       
      <h2 className="heading">
        <span className="color-primary">All in One</span>
        <span className="color-designer"> Learning Solution</span>{" "}
      </h2>
      <p className="secondary-subheading color-grey">
        Modern courses to give you the right jumpstart in your career{" "}
      </p>
      <div className="margin-mini flex-between ">

        <div className="card relative">
        <i class='bx bxs-heart-circle absolute-icons color-crimson'></i>
          <p className="para-heading margin">Select a learning model that suits you</p>
          <p className="para-text color-grey">We have 2 learning model that have been curated to give students the maximum learning capacity</p>
        </div>
        <div className="card relative ">
        <i class='bx bxs-happy-heart-eyes  absolute-icons color-green'></i>
          <p className="para-heading margin">Pick a course based on your efficiency</p>
          <p className="para-text color-grey">We have 2 learning model that have been curated to give students the maximum learning capacity</p>
        </div>
        <div className="card relative">
        <i class='bx bxs-window-alt absolute-icons color-designer' ></i>
          <p className="para-heading margin">Learn with project based development</p>
          <p className="para-text color-grey">We have 2 learning model that have been curated to give students the maximum learning capacity</p>
        </div>
        <div className="card relative">
        <i class='bx bxs-paper-plane absolute-icons color-dark-cyan' ></i>
          <p className="para-heading margin">Apply for internship with our team</p>
          <p className="para-text color-grey">We have 2 learning model that have been curated to give students the maximum learning capacity</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
