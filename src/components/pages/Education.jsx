import "../styles/Education.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import gk from "../assets/images/gk.jpg";
import leader from "../assets/images/future-leader.png";
import award from "../assets/images/award.png";
import deanslist from "../assets/images/deans-list-logo.png";
import Typography from "@mui/material/Typography";

const education = [
  {
    cardColor: "rgba(122,0,60,255)",
    textColor: "white",
    header: "Bachelors of Mechatronics Engineering, BEng",
    subtitle: "",
    img: "",
  },
  {
    cardColor: "white",
    textColor: "rgb(87,87,87)",
    header: "Golden Key Award for students",
    subtitle: "top 15% of the faculty",
    img: gk,
  },
  {
    cardColor: "rgb(30,30,30)",
    textColor: "rgb(199,199,199)",
    header: "Future Leader Recognition Award",
    subtitle: "for exemplary work during co-op term",
    img: leader,
  },
  {
    cardColor: "rgb(188,146,8)",
    textColor: "rgb(0,0,0)",
    header: "Dean’s Honour List",
    subtitle: "maintained above a 3.7 GPA (4.0 scale)",
    img: deanslist,
  },
  {
    cardColor: "rgb(0,51,102)",
    textColor: "rgb(199,199,199)",
    header: "McMaster’s Faculty of Engineering Entrance Award.",
    subtitle: "Given to students with a minimum of 3.9 GPA.",
    img: award,
  },
];
function Education() {
  return (
    <div className="Education" id="education">
      <div className="resume-header" data-aos="zoom-in-up">
        <h1>And a little more ...</h1>
      </div>
      <div className="education-card-container">
        {education.map((ed, index) => (
          <Card
            data-aos="zoom-in-up"
            className="education-card"
            sx={{
              backgroundColor: ed.cardColor,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                flex: "3",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 2,
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <Typography
                  component="div"
                  variant="h4"
                  fontFamily="URW Chancery L, cursive"
                  sx={{ color: ed.textColor }}
                >
                  {ed.header}
                </Typography>
                <Typography
                  variant="subtitle"
                  fontFamily="URW Chancery L, cursive"
                  sx={{ color: ed.textColor }}
                >
                  {ed.subtitle}
                </Typography>
              </CardContent>
            </Box>
            {ed.img != "" && (
              <CardMedia
                component="img"
                sx={{ flex: "1", objectFit: "contain", maxWidth: 250 }} 
                image={ed.img}
              />
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Education;
