import React, { useState } from "react";
import "../styles/schedule.css";

function Schedule(props) {
  const [dates, setDates] = useState([
    {
      eventDate: "26 Jan",
      eventHeading: "Event 1",
      eventDescription:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaliqua. Ut enim ad minim veniam, qu",
    },
    {
      eventDate: "13 Dec",
      eventHeading: "Event 2",
      eventDescription:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaliqua. Ut enim ad minim veniam, qu",
    },
    {
      eventDate: "23 April",
      eventHeading: "Event 3",
      eventDescription:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaliqua. Ut enim ad minim veniam, qu",
    },
    {
      eventDate: "23 April",
      eventHeading: "Event 3",
      eventDescription:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaliqua. Ut enim ad minim veniam, qu",
    },
    {
      eventDate: "23 April",
      eventHeading: "Event 3",
      eventDescription:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaliqua. Ut enim ad minim veniam, qu",
    },
  ]);
  return (
    <div className={"scheduleContainer"}>
      {/* <h1 className="heading">Schedule</h1>
      <hr className="hrLine" /> */}
      <div className="schedule">
        {dates.map((date, index) => {
          return (
            <div className="scheduleCard" key={index}>
              <div
                className="uperCard"
                style={
                  index % 2 != 0
                    ? props.theme === "dark"
                      ? {
                          backgroundColor: "#292929",
                          transform: "rotateX(180deg)",
                          clipPath:
                            "polygon(0% 5%, 5% 1%, 95% 1%, 100% 5%, 100% 100%, 0% 100%)",
                        }
                      : {
                          transform: "rotateX(180deg)",
                          clipPath:
                            "polygon(0% 5%, 5% 1%, 95% 1%, 100% 5%, 100% 100%, 0% 100%)",
                        }
                    : props.theme === "dark"
                    ? { backgroundColor: "#292929" }
                    : {}
                }
              >
                <div
                  className="dateCard"
                  style={
                    props.theme === "dark"
                      ? { background: "#373737", color: "white" }
                      : null
                  }
                >
                  <p className="eventDate">{date.eventDate}</p>
                  <h1>{date.eventHeading}</h1>
                  <p>{date.eventDescription}</p>
                </div>
              </div>
              <div
                className="lowerCard"
                style={
                  props.theme === "dark" ? { background: "#292929" } : null
                }
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Schedule;
