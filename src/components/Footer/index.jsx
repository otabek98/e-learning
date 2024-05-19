import React from "react";
import { Link } from "react-router-dom";
import { Wrap, Icon } from "./style";

export default function Footer() {
  return (
    <Wrap>
      <div className="links_wrap">CAMBRIDGE</div>
      <div className="links_wrap">
        <h3>Links</h3>
        <span><Link to="/home"style= {{ textDecoration: 'none', color: "white"}}>Home</Link></span>
        <span><Link to="/our-courses" style= {{ textDecoration: 'none', color: "white"}}>Courses</Link></span>
        <span><Link to="/about"style= {{ textDecoration: 'none', color: "white"}}>About</Link></span>
        <span><Link to="/contact"style= {{ textDecoration: 'none', color: "white"}}>Contacts</Link></span>
        <span><Link to="/Login"style= {{ textDecoration: 'none', color: "white"}}>Login</Link></span>
      </div>
      <div className="links_wrap">
        <h3>Terms of use</h3>
        <span>Terms and conditions of sale</span>
        <span>Privacy and cookies</span>
        <span>Accessibility</span>
        <span>Site map</span>
      </div>
      <div className="icons">
        <Icon.Facebook />
        <Icon.Instagram />
        <Icon.Twitter />
      </div>
    </Wrap>
  );
}
