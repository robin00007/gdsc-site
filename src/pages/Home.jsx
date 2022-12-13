import React from "react";
import Button from "../components/Button";
import "../styles/Home.css";
import logo from "../assets/logo.svg";
import rocketCloud from "../assets/rocket+cloud.svg";
import data from "../data/Home.jsx";
import Homes from "../components/Homes";
import Posts from "../assets/post.png";
import Rive from "rive-react";
import heroSvg from "../assets/homePageSvg.svg";
import { ReactComponent as Facebook } from "../assets/facebook.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as LinkedIn } from "../assets/linkedin.svg";
import { ReactComponent as Github } from "../assets/github.svg";
// import { GoogleLogo } from "../components";
import Globe from "globe.gl";
import { NavLink } from "react-router-dom";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import CustomGlobe from "../components/customGlobe";
function Home() {
  const [discription, setDiscription] = React.useState({
    dis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut dicta, vel perferendis qui ullam dolorum, odio doloremque sed tempora sint amet quae ipsa, alias hic! In quo modi voluptates, quas magni quis voluptatibus adipisci non obcaecati velit iure, veritatis reprehenderit!",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, hic illum id nemo laudantium libero tempore assumenda asperiores quidem, alias beatae culpa. Suscipit iusto magni quidem, consectetur ex dolorem temporibus?",
  });
  const [projects, setProjects] = React.useState([
    {
      imageUrl: "",
      projectLink: "www.google.com",
      name: "Project Name",
      status: "completed",
      endDate: "12/12/2020",
      domain: "Web Development",
    },
    {
      imageUrl: "",
      projectLink: "www.google.com",
      name: "Project Name 2",
      status: "completed",
      endDate: "12/12/2020",
      domain: "Web Development",
    },
    {
      imageUrl: "",
      projectLink: "www.google.com",
      name: "Project Name 3",
      status: "completed",
      endDate: "12/12/2020",
      domain: "Web Development",
    },
    {
      imageUrl: "",
      projectLink: "www.google.com",
      name: "Project Name 4",
      status: "completed",
      endDate: "12/12/2020",
      domain: "Web Development",
    },
  ]);
  const [posts, setPosts] = React.useState([
    {
      postUrl: "www.google.com",
      caption: "fdfdsfsdf",
      imageUrl: Posts,
    },
    {
      postUrl: "www.google.com",
      caption: "fdfdsfsdf",
      imageUrl: Posts,
    },
    {
      postUrl: "www.google.com",
      caption: "fdfdsfsdf",
      imageUrl: Posts,
    },
    {
      postUrl: "www.google.com",
      caption: "fdfdsfsdf",
      imageUrl: Posts,
    },
    {
      postUrl: "www.google.com",
      caption: "fdfdsfsdf",
      imageUrl: Posts,
    },
  ]);

  const myGlobe = Globe();
  // myGlobe(myDOMElement).globeImageUrl(myImageUrl).pointsData(myData);

  const cards = data.map((item, index) => {
    return <Homes {...item} key={index} />;
  });
  const links = {
    instagram: "#",
    facebook: "#",
    github: "#",
    linkedIn: "#",
  };

  return (
    <div>
      <div className="fixed-circle"></div>
      <div className="homeContainer">
        <div className="container">
          <div className="content-container">
            <div className="circle-container">
              <div className="circle circle1">G</div>
              <div className="circle circle2">D</div>
              <div className="circle circle3">S</div>
              <div className="circle circle4">C</div>
            </div>
            <p className="container-text">{discription.dis}</p>
            <div className="button-container">
              <Button text={"Join as a member"} className="member-button" />
              <Button
                text={"Join discord"}
                className="discord-button"
                css={{ background: "#C4C4C4", color: "black" }}
              />
            </div>
            <div className="social-linked">
              {/* <a href={links.facebook}>
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
              </a> */}
              {/* className="Home-instagram" */}
              <Facebook className="Home-facebook" height="40" />
              <Instagram className="Home-instagram" height="40" />
              <Github className="Home-github" fill="transparent" height="40" />
              <LinkedIn className="Home-linkedIn" height="40" />
            </div>

            {/* <div className="g-circles"></div>
            <div className="p-circles"></div>
            <div className="b-circles"></div> */}
          </div>
          <div className="heroSvg">
            {/* <GoogleLogo /> */}
            <img src={heroSvg} alt="" />
          </div>
        </div>

        {/* <img className="rocketCloudImg" src={rocketCloud} /> */}
      </div>

      <div className="technology">
        <div className="container-2">
          <div className="title-container">
            <img src={logo} />
            <p className="gdsc-title">Google Developer Student Club</p>
          </div>
          <p className="about-tech">{discription.about}</p>
          <p className="technologies">Technologies</p>
          <p className="tech-ait">
            These are some of the technologies we mainly try to focus on at DSC
            AIT
          </p>
        </div>
        <div className="container-3">{cards}</div>
      </div>
      <div className="project-container">
        <div className="project-heading">
          <p>Projects</p>
          <div className="gh-circles"></div>
          <div className="ph-circles"></div>
          <div className="bh-circles"></div>
        </div>
        <div className="project-card-container">
          {/* <CarouselProvider
            className="carousel-container"
            isPlaying={true}
            interval={2000}
            visibleSlides={3}
            orientation="horizontal"
            naturalSlideWidth={100}
            naturalSlideHeight={500}
            totalSlides={projects.length}
            infinite={true}
            // isIntrinsicHeight={true}
          >
            <Slider
              className="slider"
              style={{ display: "flex", height: "100%", padding: "10px" }}
            >
              {projects.map((project, index) => {
                return (
                  <Slide
                    index={index}
                    key={index}
                    style={{ height: "100%" }}
                    className="project-card"
                  >
                    <div className="banner-image"></div>
                    <p>{project.name}</p>
                    <div className="card-footer">
                      <p className="project-domain">{project.domain}</p>
                      <p>{project.status}</p>
                    </div>
                  </Slide>
                );
              })}
            </Slider>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
          </CarouselProvider> */}
          {projects.map((project, index) => {
            return (
              <div key={index} className="project-card">
                <div className="banner-image"></div>
                <p>{project.name}</p>
                <div className="card-footer">
                  <p className="project-domain">{project.domain}</p>
                  <p>{project.status}</p>
                </div>
              </div>
            );
          })}
        </div>
        <button className="home-project-button">
          <NavLink to="/project" rel="noreferrer">
            <p>Show More</p>
          </NavLink>
        </button>
      </div>
      <div className="post-container ">
        <div className="project-heading">
          <p>Posts</p>
          <div className="gh-circles"></div>
          <div className="ph-circles"></div>
          <div className="bh-circles"></div>
        </div>
        {/* <div className="horizontal-line"></div> */}
        <div className="all-posts-container">
          {posts.map((post, index) => {
            return (
              <div className="post" key={index}>
                <div className="post-image-container">
                  <div className="post-imageUrl">
                    <img src={post.imageUrl} alt="" />
                  </div>
                </div>
                <div className="post-content">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maxime neque natus quia accusantium quae consequatur, odio
                    asperiores tempore dolorem ullam.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="globe-container">
        {/* {Globe({ configOptions })(<domElement />)} */}
        <div
          className="globe-canvas"
          style={{ height: "600px", overflowY: "hidden" }}
        >
          <CustomGlobe />
        </div>
      </div>
    </div>
  );
}

export default Home;
