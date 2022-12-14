import React from "react";
import "../styles/components/footer.css";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import linkedIn from "../assets/linkedin.svg";
import github from "../assets/github.svg";
export default function Footer(props) {
  const links = {
    instagram: "#",
    facebook: "#",
    github: "#",
    linkedIn: "#",
  };
  return (
    <div
      className="footer-container"
      style={props.theme === "dark" ? { backgroundColor: "#E0F7FF" } : {}}
    >
      <div className="footer-content">
        <div className="thanking">
          <p style={props.theme === "dark" ? { color: "#17212B" } : {}}>
            GDSC AIT
          </p>
          <p style={props.theme === "dark" ? { color: "#17212B" } : {}}>
            made with love : )
          </p>
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
