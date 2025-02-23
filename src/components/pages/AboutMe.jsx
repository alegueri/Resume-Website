import React, { useEffect } from "react";
import "../styles/App.css";
import { Avatar } from "@mui/material";
import "../styles/About.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import CakeIcon from "@mui/icons-material/Cake";
import AOS from "aos";
import { useMediaQuery } from "react-responsive";
import "aos/dist/aos.css";
import Box from "@mui/material/Box";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Ale from "../assets/images/ale-whitebackground.jpeg";


function AboutMe() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      mirror: "true",
      once: false,
    });
  }, []);

  const avatar1 = (
    <Avatar
      src={Ale}
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "0% 00% / 0% 0%",
      }}
    />
  );

  const avatar = avatar1;

  // Skills data (you can adjust percentages based on your proficiency)
  const skills = [
    { name: "Python", level: 90 },
    { name: "Java", level: 85 },
    { name: "Golang", level: 80 },
    { name: "Kafka", level: 75 },
    { name: "Kubernetes", level: 70 },
    { name: "React", level: 90 },
  ];

  return (
    <div className="main" id="aboutme" >
      <div className="header" data-aos="zoom-in-up" >
        <h1
          style={{ fontSize: isMobile ? "32px" : isTablet ? "54px" : "72px" }}
        >
          A bit about myself
        </h1>
      </div>
      
      <div className="aboutme-container" data-aos="zoom-in-up"> 
      <div className="personal-info-outer" >
        <div className="personal-info">
          <div className="icons">
            <LocationOnIcon
              sx={{ fontSize: isMobile ? "16px" : isTablet ? "24px" : "32px" }}
            />
            Palo Alto, CA
          </div>
          <div className="icons">
            <EmailIcon
              sx={{ fontSize: isMobile ? "16px" : isTablet ? "24px" : "32px" }}
            />
            ale.guerinoni@gmail.com
          </div>
          <div className="icons">
            <PhoneIcon
              sx={{ fontSize: isMobile ? "16px" : isTablet ? "24px" : "32px" }}
            />
            (415)-307-5619
          </div>
          <div className="icons">
            <CakeIcon
              sx={{ fontSize: isMobile ? "16px" : isTablet ? "24px" : "32px" }}
            />
            April 19th, 1998
          </div>
        </div>
      </div>
      <div className="skills-section" >
        <div className="skills-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "100px",
          }}
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              style={{
                width: isMobile ? "80px" : isTablet ? "100px" : "120px",
                textAlign: "center",
                color:"white",
              }}
            >
              <CircularProgressbar
                value={skill.level}
                text={`${skill.level}%`}
                styles={buildStyles({
                  pathColor: "#00bcd4",
                  textColor: "white",
                  trailColor: "#d6d6d6",
                })}
              />
              <p style={{ marginTop: "10px", fontSize: "14px" }}>
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="outer" >
        <div className="right-side">
          <div className="about-info bubble">
            <Box
              sx={{
                position: "relative",
                backgroundColor: "#f0f0f0",
                color: "#333",
                padding: "30px",
                borderRadius: "60px",
                maxWidth: "800px",
                height:"400px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                margin: "10px 0",
                overflow: "hidden",
                wordWrap: "break-word",
                overflowWrap: "break-word",
                textAlign: "left",
                fontSize: "20px",
                lineHeight: "1.6",
              }}
            >
              Currently residing in Palo Alto, California - a software
              engineer at Tesla. Impassioned by innovation and driven by the
              need to help others. I am particularly fascinated in
              Neuroengineering - sectors including Brain Computer Interfaces,
              Neuroprothestics, Neurotechnology and AI. On the weekends, I
              volunteer with the elderly, providing them some companionship.
              In reality, it's more therapeutic for me than it is for them. I
              find joy in teaching, and spend some of my free time tutoring
              children in mathematics and programming. I love to spend time
              with my family and friends, read, play guitar, a fitness
              enthusiast with an overall focus of staying mindful throughout
              the day. Feel free to look through the remainder of my website.
              Send me an email if you have any questions or would simply like
              to get to know me better.
            </Box>
          </div>
        </div>
        <div className="left-section">{avatar}</div>
      </div>
      </div>
    </div>
  );
}

export default AboutMe;
