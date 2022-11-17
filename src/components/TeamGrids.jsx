import React from 'react'
import "../styles/components/teamGrids.css"
// import { BrowserRouter as Router, Link } from 'react-router-dom';
import linkedIn from '../assets/linkedIn.svg';
import GitHub from '../assets/github.svg';
import insta from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';
// import { ReactComponent as GitHub } from '../assets/linkedIn.svg';

function TeamGrids(props) {
    return (
        <div className='team-membersCard'>
            <div className='team-membersSocials'>
                <a href={props.gh} target="_blank" rel="noreferrer">
                    <img src={GitHub} alt="gh" />
                </a>
                <a href={props.ln} target="_blank" rel="noreferrer">
                    <img src={linkedIn} alt="gh" />
                </a>
                <a href={props.fb} target="_blank" rel="noreferrer">
                    <img src={facebook} alt="gh" />
                </a>
                <a href={props.ig} target="_blank" rel="noreferrer">
                    <img src={insta} alt="gh" />
                </a>
            </div>
            <div className='team-details'>
                <div className='team-membersImage'>
                    <img src={props.img} alt='dsc' />
                </div>
                <div className='team-memberName'>{props.name}</div>
                <div className='team-position'>{props.position}</div>
            </div>
        </div>
    )
}

export default TeamGrids