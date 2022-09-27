import React from "react";
import Button from "../components/Button";
import "../styles/Home.css";
import logo from "../assets/logo.svg";
import rocketCloud from "../assets/rocket+cloud.svg";
import data from '../data/Home.jsx'
import Homes from "../components/Homes";
function Home() {
  const [discription, setDiscription] = React.useState({
    dis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut dicta, vel perferendis qui ullam dolorum, odio doloremque sed tempora sint amet quae ipsa, alias hic! In quo modi voluptates, quas magni quis voluptatibus adipisci non obcaecati velit iure, veritatis reprehenderit!",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, hic illum id nemo laudantium libero tempore assumenda asperiores quidem, alias beatae culpa. Suscipit iusto magni quidem, consectetur ex dolorem temporibus?"
  });
  
  const cards = data.map(item => {
    return (
      <Homes
        {...item}
      />
    )
  })



  return (
    <div >
      <div className="homeContainer">
      <div className="container">
        <div className="content-container">
          <p className="container-text">{discription.dis}</p>
          <div className="button-container">
            <Button text={"Join as a member"} className="member-button" />
            <Button
              text={"Join discord"}
              className="discord-button"
              css={{ background: "#C4C4C4", color: "black" }}
            />
          </div>
          <div className="g-circles"></div>
          <div className="p-circles"></div>
          <div className="b-circles"></div>
          <div className="sg-circles"></div>
          <div className="y-circles"></div>
        </div>
      </div>
      
      <img className="rocketCloudImg" src={rocketCloud} />
   
      </div>
    
      <div className="technology">
      <div className="container-2">
        <div className="title-container">
          <img  src={logo} />
          <p className="gdsc-title">
            Google Developer Student Clubs
          </p>
        </div>
        <p className="about-tech">{discription.about}</p>
        <p className="technologies">Technologies</p>
        <p className="tech-ait">These are some of the technologies we mainly try to focus on at DSC AIT</p>
      </div>
      <div className="container-3">
        {cards}
      </div>
      </div>
      
    </div>
  );
}

export default Home;
