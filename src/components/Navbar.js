import React from "react";
import './style.css';
import logo from "../assets/logo2.png";
const Navbar = () => {
  return(

  <div className="navbar">
      <div className="logo">
          {/* <img  className="logo-img" src={logo} /> */}
          DIVISOR LOGO
      </div>
      <ul className="links">
          <li className="link">Learining Paths</li>
          <li className="link">Workshops</li>
          <li className="link">Mini Courses</li>
          <li className="link">Internships</li>
          <li className="link">Hackathons</li>
          <button className="btn-white" >Login</button>
          <button className="btn">Sign up</button>
          

      </ul>

  </div>);
};

export default Navbar;
