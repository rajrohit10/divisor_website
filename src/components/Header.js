import React from "react";
import "./style.css";
import Lottie from "react-lottie";

import logo from "../assets/logo2.png";
import animationData from "./../assets/51688-learning.json";
const Header = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="header">
      <div className="header__heading ">
        <h1 className="margin">
          <span className="color-primary">React</span>
          <span className="color-designer"> BootCamp to get you started</span>
        </h1>
        <p className="header__paragraph">
          Join the 7 Day Long bootcamp and give a boost to your career with the
          right projects and learning curve.
        </p>
        <div className="flex">
          <button className="btn-white">Register Now</button>
          <button className="btn">Feed Me Details</button>
        </div>
      </div>
      <div className="header__image">
      
        <Lottie options={defaultOptions} height={450} width={600} />
      </div>
    </div>
  );
};

export default Header;
