import React from 'react'
import '../styles/Navbar.css'
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.svg'
export default function Navbar() {
  return (
    <div>

      <div className="navbar">
        <div className='logo-container'>
        <img src={logo} className="logo"/>
        <p className='title'>GDSC AIT</p>
        </div>
        <NavLink to='/'  className="navbar-link">Home</NavLink>
        <NavLink to='/about' className="navbar-link">About</NavLink>
        <NavLink to='/contact' className="navbar-link">Contact</NavLink>
        <NavLink to='/programs' className="navbar-link">Programs</NavLink>
        <NavLink to='/project' className="navbar-link">Project</NavLink>
        <NavLink to='/schedule' className="navbar-link">Schedule</NavLink>
        <NavLink to='/team' className="navbar-link">Team</NavLink>
      </div>
      
    </div>
  )
}
