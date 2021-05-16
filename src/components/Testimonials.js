import React from "react";
import "./style.css";
import learning from "./../assets/learningpaths.jpg";

const Testimonials = () => {
  return (
    <div className="margin-extra">
      <h2 className="heading ">
        <span className="color-primary ">What our</span>
        <span className="color-designer"> Students have to say</span>{" "}
      </h2>
      <p className="secondary-subheading color-grey">
        We constanly take feedbacks in order to improve an improvise{" "}
      </p>
      <div className="container-small  ">
        <div className="grid-1-col  ">
          <div className="testimonial margin-mini padding-sideways-top relative">
            <i class="bx bxs-heart-circle testimonial-icons color-crimson"></i>

            <p className="para-text color-grey text-left padding-bottom">
              We constanly take feedbacks in order to improve and improvise and
              our students hep us in that mission and improvise and our students
              hep us in that mission.{" "}
            </p>
            <div className="flex-between ">
              <div className="flex">
                <img src={learning} className="user-image margin-right"></img>
                <div className="flex-column">
                  <p>Rohit R. Prasad</p>
                  <p className="para-mini">Front End Development</p>
                </div>
              </div>
              <div className="flex">
                <i class="bx bxs-star icon-text color-designer   color-crimson"></i>
                <i class="bx bxs-star icon-text color-designer   color-crimson"></i>
                <i class="bx bxs-star icon-text color-designer   color-crimson"></i>
                <i class="bx bxs-star icon-text color-designer   color-crimson"></i>
                <i class="bx bxs-star-half icon-text color-designer   color-crimson"></i>
              </div>
            </div>
          </div>
          <div className="testimonial margin-mini padding-sideways-top relative">
            <i class="bx bxs-heart-circle testimonial-icons color-crimson"></i>

            <p className="para-text color-grey text-left padding-bottom">
              We constanly take feedbacks in order to improve and improvise and
              our students hep us in that mission and improvise and our students
              hep us in that mission.{" "}
            </p>
            <div className="flex-between ">
              <div className="flex">
                <img src={learning} className="user-image margin-right"></img>
                <div className="flex-column">
                  <p>Rohit R. Prasad</p>
                  <p className="para-mini">Front End Development</p>
                </div>
              </div>
              <div className="flex">
                <i class="bx bxs-star icon-text color-designer   color-crimson"></i>
                <i class="bx bxs-star icon-text color-designer   color-crimson"></i>
                <i class="bx bxs-star icon-text color-designer   color-crimson"></i>
                <i class="bx bxs-star icon-text color-designer   color-crimson"></i>
                <i class="bx bxs-star-half icon-text color-designer   color-crimson"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
