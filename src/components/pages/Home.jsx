import React from "react";
import "../styles/App.css";
import HomePage from "./HomePage";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Education from "./Education";
import Achievement from "./Achievement";

function Home() {
  return (
    <div >
      <div className="home-container" id="home">
        <HomePage />
      </div>
      <AboutMe />
      <Experience />
      <Education />
      <Achievement />


      {/* testimonials a moving side bar, achievements, the card template from apple */}
      {/* add themes? */}
    </div>
  );
}

export default Home;
