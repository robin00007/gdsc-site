import React from "react";
import "../styles/components/footer.css";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import linkedIn from "../assets/linkedin.svg";
import github from "../assets/github.svg";
export default function Footer() {
  const links = {
    instagram: "#",
    facebook: "#",
    github: "#",
    linkedIn: "#",
  };
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="thanking">
          <p>GDSC AIT</p>
          <p>made with love xD</p>
        </div>
        <div className="social-links">
          <a href={links.facebook}>
            <img src={facebook} alt="link" />
          </a>
          <a href={links.linkedIn}>
            <img src={linkedIn} alt="link" />
          </a>
          <a href={links.github}>
            <img src={github} alt="link" />
          </a>
          <a href={links.instagram}>
            <img src={instagram} alt="link" />
          </a>
        </div>
      </div>
    </div>
  );
}
