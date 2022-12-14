import React from "react";
import "../styles/Project.css";
import Banner from "../components/Banner";
import Adventure from "../assets/teamwork.svg";

function Projects() {
  const [projects, setProjects] = React.useState([
    {
      imageUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      projectLink: "www.google.com",
      name: "Project Name",
      status: "completed",
      endDate: "12/12/2020",
      domain: "Web Development",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      projectLink: "www.google.com",
      name: "Project Name 2",
      status: "completed",
      endDate: "12/12/2020",
      domain: "Web Development",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      projectLink: "www.google.com",
      name: "Project Name 3",
      status: "completed",
      endDate: "12/12/2020",
      domain: "Web Development",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      projectLink: "www.google.com",
      name: "Project Name 4",
      status: "completed",
      endDate: "12/12/2020",
      domain: "Web Development",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      projectLink: "www.google.com",
      name: "Project Name 2",
      status: "completed",
      endDate: "12/12/2020",
      domain: "Web Development",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      projectLink: "www.google.com",
      name: "Project Name 3",
      status: "completed",
      endDate: "12/12/2020",
      domain: "Web Development",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      projectLink: "www.google.com",
      name: "Project Name 4",
      status: "completed",
      endDate: "12/12/2020",
      domain: "Web Development",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      projectLink: "www.google.com",
      name: "Project Name 2",
      status: "completed",
      endDate: "12/12/2020",
      domain: "Web Development",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      projectLink: "www.google.com",
      name: "Project Name 3",
      status: "completed",
      endDate: "12/12/2020",
      domain: "Web Development",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      projectLink: "www.google.com",
      name: "Project Name 4",
      status: "completed",
      endDate: "12/12/2020",
      domain: "Web Development",
    },
  ]);
  return (
    <div className={"projectConatiner"}>
      <Banner
        image={Adventure}
        color="#6199F6"
        heading={
          "Helping communities thrive, through technology and collaboration"
        }
        subtext={
          "Building projects for communities can be a rewarding and meaningful way to make a positive impact in the world. By creating projects that address the needs and challenges of a specific community, developers can help improve the lives of others and make a meaningful difference."
        }
      />
      {/* <p className={"projectSubheading"}>Connect - Learn - Grow</p> */}

      <div className="project-card-containers">
        {projects.map((project, index) => {
          return (
            <div key={index} className="project-cards">
              <img className="projects-image" src={project.imageUrl} alt="" />
              <p className="Project-names">{project.name}</p>
              <div className="card-footers">
                <p className="project-domains">{project.domain}</p>
                <p className="projects-status">{project.status}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Projects;
