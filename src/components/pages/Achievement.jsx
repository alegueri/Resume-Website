import "../styles/Achievements.css";
import "aos/dist/aos.css";
import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import cacao from "../assets/images/cacao2.jpg";
import k8 from "../assets/images/k8s.png";
import tesla from "../assets/images/tesla.jpg";
import ecornell from "../assets/images/ecornell.png";
import triauto from "../assets/images/triage.png";
import jays from "../assets/images/bluejays.png";
import gas from "../assets/images/gas.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";

const achievements = [
  {
    header: "Kubernetes Contributer",
    subtitle: "Kubernetes Community",
    fromdate: "Aug 2024",
    todate: "Present",
    description:
      "Contributed to several Kubernetes repositories, making changes to the website and kubectl.",
    img: k8,
  },
  {
    header: "Teslup",
    subtitle: "Independent Developer",
    fromdate: "Aug 2024",
    todate: "Present",
    description:
      "Created a Tesla mobile application that scrapes publicly exposed Tesla APIs, leveraging React-Native and Node.js.",
    img: tesla,
  },
  {
    header: "Machine Learning Certificate",
    subtitle: "Cornell University",
    fromdate: "May 2024",
    todate: "Present",
    description:
      "Completed the Machine Learning certificate program at Cornell University",
    img: ecornell,
  },
  {
    header: "TriAuto",
    subtitle: "McMaster University",
    fromdate: "Sept 2021",
    todate: "April 2022",
    description:
      "Collaborated with a 4-person team to develop an automated hospital triage system using React, Node.js, MySQL, and Socket.IO.",
    img: triauto,
  },
  {
    header: "Cacao Husk",
    subtitle: "Calientico Inc.",
    fromdate: "Aug 2021",
    todate: "Aug 2022",
    description:
      "Founded a Cacao Husk Tea business, selling tea sourced from Peru, with a 31% profit margin.",
    img: cacao,
  },
  {
    header: "Lit Girls Guest Speaker",
    subtitle: "Blue Jays Care - Leadership Training Program",
    fromdate: "May 2021",
    description:
      "Inspired over 50 young women to explore Engineering as a career path.",
    todate: "",
    img: jays,
  },
  {
    header: "OutFuel",
    subtitle: "McMaster University",
    fromdate: "Jan 2018",
    todate: "April 2018",
    description:
      "Led a team in developing a fuel expense tool using Java and J-Unit testing.",
    img: gas,
  },
];

function Achievement() {
  return (
    <div className="Achievement" id="achievement">
      <div className="resume-header" data-aos="zoom-in-up">
        <h1>Personal Projects</h1>
      </div>

      <div className="achievement-wrapper">
        <Swiper
          cssMode={true}
          navigation={true}
          slidesPerView={4}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          spaceBetween={30}
          loop={true} /* works? */
          modules={[Navigation, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {achievements.map((ach, index) => (
            <SwiperSlide>
              <Card
                sx={{
                  width: "100% ",
                  height: "100%",
                  display: "flex",
                  borderRadius: "50px",
                  backgroundColor: "rgb(245,245,247)",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img" 
                  sx={{
                    display: "flex",

                   }}
                  image={ach.img}
                />
                <CardContent
                  sx={{
                    display: "flex",

                    width: "100%",
                    height: "200px",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography gutterBottom variant="h5" component="div">
                    {ach.header}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {ach.subtitle}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {ach.description}
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Achievement;
