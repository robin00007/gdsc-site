import React from 'react'
import "../styles/Project.css"
import Banner from "../components/Banner";
import Adventure from '../assets/teamwork.svg'

function Projects() {
  const [projects, setProjects] = React.useState([
    {
      imageUrl: "https://avatars.githubusercontent.com/u/75138050?s=200&v=4",
      projectLink: "www.google.com",
      name: "Project Name",
      status: "completed",
      endDate: "12/12/2020",
      domain: "Web Development",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/75138050?s=200&v=4",
      projectLink: "www.google.com",
      name: "Project Name 2",
      status: "completed",
      endDate: "12/12/2020",
      domain: "Web Development",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/75138050?s=200&v=4",
      projectLink: "www.google.com",
      name: "Project Name 3",
      status: "completed",
      endDate: "12/12/2020",
      domain: "Web Development",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/75138050?s=200&v=4",
      projectLink: "www.google.com",
      name: "Project Name 4",
      status: "completed",
      endDate: "12/12/2020",
      domain: "Web Development",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/75138050?s=200&v=4",
      projectLink: "www.google.com",
      name: "Project Name 2",
      status: "completed",
      endDate: "12/12/2020",
      domain: "Web Development",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/75138050?s=200&v=4",
      projectLink: "www.google.com",
      name: "Project Name 3",
      status: "completed",
      endDate: "12/12/2020",
      domain: "Web Development",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/75138050?s=200&v=4",
      projectLink: "www.google.com",
      name: "Project Name 4",
      status: "completed",
      endDate: "12/12/2020",
      domain: "Web Development",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/75138050?s=200&v=4",
      projectLink: "www.google.com",
      name: "Project Name 2",
      status: "completed",
      endDate: "12/12/2020",
      domain: "Web Development",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/75138050?s=200&v=4",
      projectLink: "www.google.com",
      name: "Project Name 3",
      status: "completed",
      endDate: "12/12/2020",
      domain: "Web Development",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/75138050?s=200&v=4",
      projectLink: "www.google.com",
      name: "Project Name 4",
      status: "completed",
      endDate: "12/12/2020",
      domain: "Web Development",
    },
  ]);
  return (
    <>
      <Banner image={Adventure}
        color="#6199F6"
        heading={"Helping communities thrive, through technology and collaboration"}
        subtext={"Building projects for communities can be a rewarding and meaningful way to make a positive impact in the world. By creating projects that address the needs and challenges of a specific community, developers can help improve the lives of others and make a meaningful difference."} />
      <div className="project-card-containers">
        {projects.map((project, index) => {
          return (
            <div key={index} className="project-cards">
              <img className='projects-image' src={project.imageUrl} alt="" />
              <p className='Project-names'>{project.name}</p>
              <div className="card-footers">
                <p className="project-domains">{project.domain}</p>
                <p className='projects-status'>{project.status}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  )
}
export default Projects