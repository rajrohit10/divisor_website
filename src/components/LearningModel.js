import React from "react";
import "./style.css";
import learning from "./../assets/learningpaths.jpg";
import workshops from "./../assets/workshops.jpg";

const LearningModel = () => {
  return (
    <div className="margin-extra">
      <h2 className="heading">
        <span className="color-primary">Check out</span>
        <span className="color-designer"> the learning models</span>{" "}
      </h2>
      <p className="secondary-subheading color-grey">
        Models curated to give you the best learning experience{" "}
      </p>

      <div className="margin-mini  grid-3-column ">
        <div className="learning-paths">
          <img src={learning} className="img-main" />
          <div className="internal-padding">
            <h2 className="font-medium margin text-left color-grey">
              <span className="color-crimson">Mini</span>{" "}
              <span className="color-designer"> Courses</span>
            </h2>
            <div className="grid ">
              <p className="flex margin-side">
                <i class="bx bxs-category icon-text color-designer  margin-right color-crimson"></i>{" "}
                <span className="hightligted-text">2 Mini Courses</span>
              </p>
              <p className="flex margin-side">
                <i class="bx bxs-videos icon-text color-designer  margin-right color-green"></i>{" "}
                <span className="hightligted-text">5+ hrs of Content</span>
              </p>
              <p className="flex margin-side margin-small">
                <i class="bx bxs-terminal icon-text color-designer   margin-right  color-dark-cyan"></i>{" "}
                <span className="hightligted-text">3+ Major Projects</span>
              </p>
              <p className="flex margin-side">
                <i class="bx bxs-time-five icon-text color-designer  margin-right color-orange"></i>{" "}
                <span className="hightligted-text">1 Year Access</span>
              </p>
            </div>
          </div>
          <button className="btn btn-full-secondary">Take me there</button>
        </div>
        <div className="learning-paths">
          <img src={learning} className="img-main" />
          <div className="internal-padding">
            <h2 className="font-medium margin text-left color-grey">
              <span className="color-crimson">Live</span>{" "}
              <span className="color-designer"> Learning Paths</span>
            </h2>
            <div className="grid">
              <p className="flex margin-side">
                <i class="bx bxs-category icon-text color-designer  margin-right color-crimson"></i>{" "}
                <span className="hightligted-text">3 Learning Paths</span>
              </p>
              <p className="flex margin-side">
                <i class="bx bxs-videos icon-text color-designer  margin-right color-green"></i>{" "}
                <span className="hightligted-text">100+ hrs of Videos</span>
              </p>
              <p className="flex margin-side margin-small">
                <i class="bx bxs-terminal icon-text color-designer   margin-right  color-dark-cyan"></i>{" "}
                <span className="hightligted-text">10+ Major Projects</span>
              </p>
              <p className="flex margin-side">
                <i class="bx bxs-time-five icon-text color-designer  margin-right color-orange"></i>{" "}
                <span className="hightligted-text">Life Time Access</span>
              </p>
            </div>
          </div>
          <button className="btn btn-full-secondary">Take me there</button>
        </div>
        <div className="mini-bootcamps">
          <img src={workshops} className="img-main" />
          <div className="internal-padding">
            <h2 className="font-medium margin text-left color-grey">
              <span className="color-orange">Live</span>{" "}
              <span className="color-designer"> Mini bootcamps</span>
            </h2>
            <div className="grid">
              <p className="flex margin-side">
                <i class="bx bxs-category icon-text color-designer  margin-right color-crimson"></i>{" "}
                <span className="hightligted-text">2  Bootcamps</span>
              </p>
              <p className="flex margin-side">
                <i class="bx bxs-videos icon-text color-designer  margin-right color-green"></i>{" "}
                <span className="hightligted-text">15+ hrs Course</span>
              </p>
              <p className="flex margin-side margin-small">
                <i class="bx bxs-terminal icon-text color-designer  margin-right color-dark-cyan"></i>{" "}
                <span className="hightligted-text">2+ Major Projects</span>
              </p>
              <p className="flex margin-side">
                <i class="bx bxs-time-five icon-text color-designer  margin-right color-orange"></i>{" "}
                <span className="hightligted-text">10 Days Long </span>
              </p>
            </div>
            </div>
            <button className="btn btn-full-secondary">Take me there</button>
         
        </div>
      </div>
    </div>
  );
};
export default LearningModel;
