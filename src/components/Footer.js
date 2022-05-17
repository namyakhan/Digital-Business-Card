import React from "react";
import { FaTwitter, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <FaTwitter className="icons" />
      <FaGithub className="icons" />
      <FaLinkedinIn className="icons" />
      <FaInstagram className="icons" />
    </div>
  );
}
