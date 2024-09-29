import React, { useState, useEffect } from "react";
import { Button } from "../utils/Button";
import "../styles/HeroSection.css";
import "../styles/App.css";
import { Linking } from "react-native";
import { ReactTyped } from "react-typed";
import Typography from '@mui/material/Typography';

function HomePage() {
  const [font, setFont] = useState("42px");
  const [fontAle, setFontAle] = useState("64px");
  const [buttons, setbuttonS] = useState(true);
  const buttonS = () => {
    if (window.innerWidth <= 1300) {
      setbuttonS(false);
    } else {
      setbuttonS(true);
    }
  };
  useEffect(() => {
    buttonS();
  }, []);

  window.addEventListener("resize", buttonS);

  return (
    <div className="hero-container" >
      <div className="sub-container">
        <h3>
      <Typography sx={{color: "rgba(255, 255, 255)", fontSize: {
      xs: "16px", // Small screens
      sm: "24px", // Medium screens
      md: "36px", // Large screens
      lg: "42px", // Extra large screens
    },}} >
      <ReactTyped
        startWhenVisible
        strings={[`Welcome! I am <span style="color: #b22222; font-size: 1.2em;"> Alessandra </span>`]}
        typeSpeed={50}
        backSpeed={50}
        loop={false}
      />
    </Typography>
        </h3>

        <div className="resume-button">
            <Button buttonStyle="btn--outline" file="./AlessandraGuerinoni_Resume.pdf">
              <i className="fas fa-download"></i> Download CV
            </Button>
        </div>

        <div className="hero-btns">
          <Button
            className="btns"
            onClick={() => Linking.openURL("mailto:ale.guerinoni@gmail.com")}
            buttonStyle="btn--outline"
            buttonSize={buttons ? "btn--large" : "btn--medium"}
          >
            <i className="fas fa-envelope"></i>
          </Button>
          <Button
            className="btns"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/alessandraguerinoni",
                "_blank"
              )
            }
            buttonStyle="btn--outline"
            buttonSize={buttons ? "btn--large" : "btn--medium"}
          >
            <i className="fab fa-linkedin-in"></i>
          </Button>
          <Button
            className="btns"
            onClick={() => window.open("https://github.com/alegueri", "_blank")}
            buttonStyle="btn--outline"
            buttonSize={buttons ? "btn--large" : "btn--medium"}
          >
            <i className="fab fa-github"></i>
          </Button>
          <Button
            className="btns"
            onClick={() =>
              window.open("https://www.instagram.com/aleguerinoni/", "_blank")
            }
            buttonStyle="btn--outline"
            buttonSize={buttons ? "btn--large" : "btn--medium"}
          >
            <i className="fab fa-instagram"></i>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
