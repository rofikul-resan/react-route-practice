import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>this is me. i tail about myself</h1>
      <Link to={"../friends"}> my friends</Link>
    </div>
  );
};

export default About;
