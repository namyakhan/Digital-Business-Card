import React from "react";
import logo from "../images/profile-pic.png";
import { FaLinkedinIn, FaEnvelopeSquare } from "react-icons/fa";
export default function Info() {
  return (
    <div>
      <img src={logo} alt="Logo" />
      <h1 className="title">Namya Khan</h1>
      <p className="subheading">Frontend Developer</p>
      <a href="https://www.namyakhan.com/">namyakhan.com</a>
      <div className="btn">
        <button className="email-btn">
          <FaEnvelopeSquare /> Email
        </button>
        <button className="linkedin-btn">
          <FaLinkedinIn /> Linkedin
        </button>
      </div>
    </div>
  );
}
