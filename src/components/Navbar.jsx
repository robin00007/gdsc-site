import { useMediaQuery } from 'react-responsive'
import React, { useState } from 'react'
// desktop/laptop Navbar
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
// tab/mobile Navbar
import Home from "../assets/navbar/Default.svg"
import Team from "../assets/navbar/Team.svg"
import Achievements from "../assets/navbar/Achievements.svg"
import Events from "../assets/navbar/Events.svg"
import Project from "../assets/navbar/Project.svg"
import downarrow from "../assets/navbar/downarrow.svg"
import "../styles/components/MobileNavbar.css"


export default function Navbar() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1000px)'
  })
  const [showIcons, setShowIcons] = useState(0);
  return (
    <div>
      {isDesktopOrLaptop ? <div className="navbar-container">
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
        :
        <div className='HomeButton'>
          {showIcons &&
            <div className='Navigation-button'>
              <button className='NavButtonIcon' onClick={() => { setShowIcons(!showIcons) }}>
                <img src={downarrow} alt="" height="40px" width="20px" />
              </button>
              <button className='NavButtonIcon'>
                <a href="/team" rel="noreferrer">
                  <img src={Team} alt="" height="40px" />
                </a>
              </button>
              <button className='NavButtonIcon'>
                <a href="/about" rel="noreferrer">
                  <img src={Achievements} alt="" height="40px" />
                </a>
              </button>
              <button className='NavButtonIcon'>
                <a href="/Schedule" rel="noreferrer">
                  <img src={Events} alt="" height="40px" />
                </a>
              </button>
              <button className='NavButtonIcon'>
                <a href="/project" rel="noreferrer">
                  <img src={Project} alt="" height="40px" />
                </a>
              </button>
            </div>
          }
          <button className='NavButtonIcon' onClick={() => { setShowIcons(!showIcons) }}>
            <img src={Home} alt="" height="60px" />
          </button>
        </div>
      }
    </div>
  );
}
