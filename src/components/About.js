import React from "react";
import Links from "./Links";

function About({ bio, links }) {
  return (
    <div>
      <p>{bio}</p>
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

export default About;
