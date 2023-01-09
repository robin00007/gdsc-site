import React, { useContext } from "react";
import Button from "../components/Button";
import "../styles/Home.css";
import logo from "../assets/logo.svg";
import rocketCloud from "../assets/rocket+cloud.svg";
import data from "../data/Home.jsx";
import Homes from "../components/Homes";
// images for the post section 
import Posts from "../assets/post.png";
import post1 from "../assets/posts/post1.jpeg"
import post2 from "../assets/posts/post2.jpg"
import post3 from "../assets/posts/post3.jpg"
import post4 from "../assets/posts/post4.jpg"
import post5 from "../assets/posts/post5.jpg"
// for the read more button logic
const max_length = 200;
// for the projects images
import project1 from "../assets/projects/text-edit-app.png"

import Rive from "rive-react";
import heroSvg from "../assets/homePageSvg.svg";
import { ReactComponent as Facebook } from "../assets/facebook.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as LinkedIn } from "../assets/linkedin.svg";
import { ReactComponent as Github } from "../assets/github.svg";
// import { GoogleLogo } from "../components";
import Globe from "globe.gl";
import { NavLink } from "react-router-dom";
import light from "../assets/globe/light.png";

// FAQ files
import Accordion from "../components/Accordion.jsx"
import { accordionData } from "../data/accordiondata.jsx"
import "../styles/components/accordion.css"
import questionmark from "../assets/questionmark-symbol.svg"
import lightQuestionmark from "../assets/lightQuestionmark.svg"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import CustomGlobe from "../components/customGlobe";
import { GlobeConfig, ThemeContext } from "../context";
import InputForm from "../components/InputForm";
import { Flag } from "@mui/icons-material";
import { useState } from "react";
import Spinner from "../components/Spinner";

function Home() {
  const { config: globeConfig, toggleConfig } = useContext(GlobeConfig);
  const { theme } = useContext(ThemeContext);
  React.useEffect(() => {
    console.log("called");
    if (theme === "light") {
      toggleConfig({
        mode: "light",
        image: "https://i.imgur.com/85aMv2L.png",
        pixel: "#000",
      });
    } else {
      toggleConfig({
        mode: "dark",
        image:
          "https://unpkg.com/three-globe@2.24.8/example/img/earth-dark.jpg",
        pixel: "#fff",
      });
    }
  }, [theme]);
  const [discription, setDiscription] = React.useState({
    dis: "Google Developer Student Clubs are university based community groups for students interested in Google developer technologies. Students from all undergraduates and graduate with an interest in growing as a developer are welcome. By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community",
    about:
      "This is what we thrive for, here at GDSC AIT Pune. A group of tech enthusiasts learning and exploring new fields, aiming to bring a positive impact through technology in the community around us",
  });
  const [projects, setProjects] = React.useState([
    {
      imageUrl: project1,
      projectLink: "https://text-edit-gdsc.netlify.app/",
      name: "Text-Edit",
      status: "completed",
      endDate: "1/11/2022",
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
      caption: "We are counting down the days, so should you⚡🗓️ GDSC AIT Pune in collaboration with GDSC Vel Tech is hosting an event to guide you for GSoC 2023. (Google Summer of Code) Register yourself ASAP!! Perks- Speaker Event & Certificate of Participation 🤍 Cheers to endless learning!🥂 GDSC AIT Pune X GDSC Vel Tech",
      imageUrl: post1,
    },
    {
      postUrl: "www.google.com",
      caption: "GDSC AIT Pune ,🔥 powered by Google Developers presents it's first Google Cloud Career Practitioner class. ✨An exclusive digital Google Cloud skill badge demonstrates your growing Google Cloud recognized skillset. Show your cloud skills by completing the hands-on labs, including a final assessment challenge lab, to test your skills and earn a Google Cloud skill badge to share with your network. Stuck anywhere ⁉️ Get in Touch with Tarun Mishra who is specially trained on Google Cloud will help you out. 👤 Tarun Mishra - Google Cloud facilitator 📱 WhatsApp No :- +91 95984 15980 So come ready with your laptops charged 👨‍💻 !! You will be getting free access to qwiklabs and exclusive badges. 📍 Venue: Manekshaw Hall 🕧 Timing: 12:30 - 13:30 20th Nov 2022 (Sunday) See you in the cloud ☁️",
      imageUrl: post2,
    },
    {
      postUrl: "www.google.com",
      caption: "Come join us!! The timer has begun to run down! We require your help in order to fly throughout the galaxy. All Earthlings are welcome on board our ship. We will help you understand Google technologies including Android, Flutter, Google Cloud, Machine Learning, and Web Development. If you join us on our adventure, you will also acquire design and managerial abilities in addition to these. If you're an Earthling looking to join the GDSC community, fill out the form Link is in the bio. On or before November 5, 2022 at 11:59 PM, the form must be submitted",
      imageUrl: post3,
    },
    {
      postUrl: "www.google.com",
      caption: "Open source is about collaborating; not competing. Don’t forget to make a pull request Start your journey of open sourcing with Hacktoberfest 2022. What is Hacktoberfest ? It is a space for folks taking part in building community and help people by giving them a dedicated time and place to work on their contributions. Stay tuned, we are bringing a surprise for you. Registrations have started: Link in Bio",
      imageUrl: post4,
    },
    {
      postUrl: "www.google.com",
      caption: "Don't miss the opportunity !Let’s learn Android development , join the #ComposeCamp on and learn the fundamentals of how to build modern Android apps with Jetpack Compose in this journey.",
      imageUrl: post5,
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
    <div className="main-Container">
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
              {/* <Facebook className="Home-facebook" height="40" />
              <Instagram className="Home-instagram" height="40" />
              <Github className="Home-github" fill="transparent" height="40" />
              <LinkedIn className="Home-linkedIn" height="40" /> */}
              <img src="https://firebasestorage.googleapis.com/v0/b/theanton-resume.appspot.com/o/gdsc%2Ffacebook.svg?alt=media&token=a4972ea9-991d-4047-b0df-7a132d64d00e" alt="fb" height="40" />
              <img src="https://firebasestorage.googleapis.com/v0/b/theanton-resume.appspot.com/o/gdsc%2Finstagram.svg?alt=media&token=fdc20d42-99d1-4a27-9674-61ff35703c8b" alt="IG" height="40" />
              <img src="https://firebasestorage.googleapis.com/v0/b/theanton-resume.appspot.com/o/gdsc%2Fgithub.svg?alt=media&token=1553097d-33d0-4fa2-a898-ab55ecc86960" alt="GH" height="40" />
              <img src = "https://firebasestorage.googleapis.com/v0/b/theanton-resume.appspot.com/o/gdsc%2Ficons8-youtube.svg?alt=media&token=d33e4d72-c7ac-4f23-8c42-10bd59e1fd84" alt="yt" height= "40"/>
              <img src="https://firebasestorage.googleapis.com/v0/b/theanton-resume.appspot.com/o/gdsc%2Flinkedin.svg?alt=media&token=d6134ca9-6f46-4ee8-b9c5-568eccbc4a22" alt="Ln" height="40" />
            </div>

            {/* <div className="g-circles"></div>
            <div className="p-circles"></div>
            <div className="b-circles"></div> */}
          </div>
          <div className="heroSvg">
            {/* <GoogleLogo /> */}
            {/* <img src={heroSvg} alt="" /> */}
            <lottie-player
              src="https://assets1.lottiefiles.com/packages/lf20_pepphvu9.json"
              background="transparent"
              // background="yellow"
              speed="1"
              style={{
                // zIndex: "2",
                transform: "scale(1.8)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              loop
              // controls
              autoplay
            ></lottie-player>
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
          {projects.map((project, index) => {
            return (
              <div key={index} className="project-card">
                <div className="banner-image">
                  {/* <img src={project.imageUrl} alt=""/> */}
                </div>
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
            const [visited, setVisited] = React.useState(1);
            function clickedReadMore(){
              setVisited(!visited)
            }
            return (
              <div className="post" key={index}>
                <div className="post-image-container">
                  <div className="post-imageUrl">
                    <img src={post.imageUrl} alt="" />
                  </div>
                </div>
                <div className="post-content">
                  {(post.caption.length > max_length && Boolean(visited)) ?
                    (
                      <div>
                        {`${post.caption.substring(0, max_length)}...`}<button onClick={clickedReadMore}>Read more</button>
                      </div>
                    ) :
                    <p>
                      {post.caption}<button onClick={clickedReadMore}>Show less</button>
                    </p>
                  }
                  {/* {post.caption} */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="home-faq-container">
      <div className="home-faq">
        <div className="home-input-form-container">
          <div className="input-form-circle-home">
            {theme=="light" ?
            (<img src={questionmark} alt="?" className="questionmark" />):
            (<img src={lightQuestionmark} alt="" className="questionmark"/>)
          }
          </div>
          <div className="home-inputform">
            <InputForm />
          </div>
        </div>
        <div className="home-inputForm-Accordion">
          <div className="project-heading">
            <p>FAQs</p>
            <div className="gh-circles"></div>
            <div className="ph-circles"></div>
            <div className="bh-circles"></div>
          </div>
          <div className="home-accordion">
            <div className="accordion">
              {accordionData.map(({ title, content }) => (
                <Accordion title={title} content={content} />
              ))}
              {/* <input type="text" placeholder="Ask your Query Related To DSC" className="quesryInputGdsc" /> */}
            </div>
          </div>
        </div>
      </div>

      </div>
      <div className="globe-container">
        {/* {Globe({ configOptions })(<domElement />)} */}
        <div
          className="globe-canvas"
          style={{ height: "600px", overflowY: "hidden" }}
        >
          <CustomGlobe globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
}

export default Home;
