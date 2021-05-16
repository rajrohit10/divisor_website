import React from "react";
import "./style.css";
import Lottie from "react-lottie";

import animationData from "./../assets/gap.json";
import industry from "./../assets/industry.json"

const Pointers = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: industry,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="margin-extra">
      <h2 className="heading">
        <span className="color-primary">What makes</span>
        <span className="color-designer"> us different from others</span>{" "}
      </h2>
      <p className="secondary-subheading color-grey">
        Our first aim is to make every student industry ready.{" "}
      </p>
      <div className="header padding">
        <div className="header__heading align-self">
          <h1 className="margin font-large ">
            <span className="color-primary">Bridging the huge</span>
            <span className="color-designer"> gap in learning</span>
          </h1>
          <p className="header__paragraph">
            Join the 7 Day Long bootcamp and give a boost to your career with
            the right projects and learning curve.
          </p>
        </div>
        <div className="header__image">
          <Lottie options={defaultOptions} height={450} width={600} />
        </div>
      </div>
      {/* 2nd FEATURES */}
      <div className="header padding">
        <div className="header__image">
          <Lottie options={defaultOptions2} height={450} width={600} />
        </div>
        <div className="header__heading align-self">
          <h1 className="margin font-large  ">
            <span className="color-primary">Teaching you</span>
            <span className="color-designer"> with industry use cases</span>
          </h1>
          <p className="header__paragraph">
            Join the 7 Day Long bootcamp and give a boost to your career with
            the right projects and learning curve.
          </p>
        </div>
      </div>
     
    </div>
  );
};
export default Pointers;
