import { useMediaQuery } from "react-responsive";
import React, { useState } from "react";
// desktop/laptop Navbar
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
// tab/mobile Navbar
import Home from "../assets/navbar/Default.svg";
import Team from "../assets/navbar/Team.svg";
import Homes from "../assets/navbar/Homes.svg";
import Achievements from "../assets/navbar/Achievements.svg";
import Events from "../assets/navbar/Events.svg";
import Project from "../assets/navbar/Project.svg";
import downarrow from "../assets/navbar/downarrow.svg";
import "../styles/components/MobileNavbar.css";
// dark mobile navbar
import DarkAchievements from "../assets/navbar/DarkAchievements.svg";
import DarkEvents from "../assets/navbar/DarkEvents.svg";
import DarkHomes from "../assets/navbar/DarkHome.svg";
import DarkProject from "../assets/navbar/DarkProject.svg";
import DarkTeam from "../assets/navbar/DarkTeam.svg";
import DarkDefault from "../assets/navbar/DarkDefault.svg";
export default function Navbar(props) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });
  const [showIcons, setShowIcons] = useState(false);
  return (
    <div>
      {isDesktopOrLaptop ? (
        <div className="navbar-container">
          <div className="navbar">
            <div className="logo-container">
              <img src={logo} className="logo" />
              <p className="title">GDSC AIT</p>
            </div>
            <div className="links-container">
              <NavLink to="/" className="navbar-link">
                Home
              </NavLink>
              <NavLink to="/about" className="navbar-link">
                About
              </NavLink>
              <NavLink to="/contact" className="navbar-link">
                Contact
              </NavLink>
              <NavLink to="/programs" className="navbar-link">
                Programs
              </NavLink>
              <NavLink to="/project" className="navbar-link">
                Project
              </NavLink>
              <NavLink to="/schedule" className="navbar-link">
                Schedule
              </NavLink>
              <NavLink to="/team" className="navbar-link">
                Team
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <div className="HomeButton">
          {showIcons && (
            <div className="Navigation-button">
              <button
                className="NavButtonIcon"
                onClick={() => {
                  setShowIcons(!showIcons);
                }}
              >
                <img src={downarrow} alt="" height="40px" width="20px" />
              </button>
              <button className="NavButtonIcon">
                <NavLink to="/team" rel="noreferrer">
                  {`${props.theme}` === `light` ? (
                    <img src={Team} alt="" height="40px" />
                  ) : (
                    <img src={DarkTeam} alt="" height="40px" />
                  )}
                </NavLink>
              </button>
              <button className="NavButtonIcon">
                <NavLink to="/about" rel="noreferrer">
                  {`${props.theme}` === `light` ? (
                    <img src={Achievements} alt="" height="40px" />
                  ) : (
                    <img src={DarkAchievements} alt="" height="40px" />
                  )}
                </NavLink>
              </button>
              <button className="NavButtonIcon">
                <NavLink to="/" rel="noreferrer">
                  {`${props.theme}` === `light` ? (
                    <img src={Homes} alt="" height="40px" />
                  ) : (
                    <img src={DarkHomes} alt="" height="40px" />
                  )}
                </NavLink>
              </button>
              <button className="NavButtonIcon">
                <NavLink to="/Schedule" rel="noreferrer">
                  {`${props.theme}` === `light` ? (
                    <img src={Events} alt="" height="40px" />
                  ) : (
                    <img src={DarkEvents} alt="" height="40px" />
                  )}
                </NavLink>
              </button>
              <button className="NavButtonIcon">
                <NavLink to="/project" rel="noreferrer">
                  {`${props.theme}` === `light` ? (
                    <img src={Project} alt="" height="40px" />
                  ) : (
                    <img src={DarkProject} alt="" height="40px" />
                  )}
                </NavLink>
              </button>
            </div>
          )}
          <button
            className="NavButtonIcon"
            onClick={() => {
              setShowIcons(!showIcons);
            }}
          >
            {`${props.theme}` === `light` ? (
              <img src={Home} alt="" height="60px" />
            ) : (
              <img src={DarkDefault} alt="" height="60px" />
            )}
          </button>
        </div>
      )}
    </div>
  );
}
