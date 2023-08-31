import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

function Timeline() {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "#0b0c10",
        color: "#fff",
      }}
      position={"right"}
      contentArrowStyle={{
        borderRight: "10px solid  #45a29e",
      }}
      date="2011 - present"
      iconStyle={{
        color: "#fff",
        boxShadow: "none",
        padding: 0,
      }}
    >
      <h3 className="vertical-timeline-element-title">Creative Director</h3>
      <p>
        Creative Direction, User Experience, Visual Design, Project Management,
        Team Leading
      </p>
    </VerticalTimelineElement>
  );
}

export default Timeline;
