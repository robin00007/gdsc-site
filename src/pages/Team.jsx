import React from "react";
import TeamImage from '../assets/team6.png'
import { Grid } from "@mui/material";
import "../styles/Team.css"
import Banner from "../components/Banner";
import Teammembers from "../data/Teammembers";
import TeamGrids from "../components/TeamGrids";

class Team extends React.Component {

  componentDidMount() { }

  render() {
    return (
      <div className="team">
        <Banner image={TeamImage}
          color="#6199F6"
          heading={"Community that grows by embracing others"}
          subtext={"We are team of experienced developers who are interested in giving back to the community"} />

        <div>
          <div>
            <span style={{ fontSize: "8vh", fontWeight: "bold", color: "#4285F4" }}>{"Our Team"}</span>
          </div>
          <div className="yearTimeline" >
            <div><span className="timelineItems">{"2021"}</span></div>
            <div><span className="timelineItems">{"Alumni"}</span></div>
          </div>
        </div>
        <section className="member">
          {Teammembers.map((member, ind) => {
            return (
              <TeamGrids
                key={ind}
                name={member.name}
                position={member.position}
                img={member.image_url}
                gh={member.social_profiles.gitHub}
                ig={member.social_profiles.instagram}
                fb={member.social_profiles.facebook}
                ln={member.social_profiles.linkedIn}
              />
            );
          })}
        </section>
      </div>
    )
  }
}

export default Team;