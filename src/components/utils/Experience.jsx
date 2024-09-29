import Divider from "@mui/material/Divider";
import AddTaskIcon from '@mui/icons-material/AddTask';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


// ---- images  ----- 
import teslaLogo from "../assets/images/Tesla_Motors.png";
import bombardier from "../assets/images/bombardier.png";
import mac from "../assets/images/mac.png";
import mac2 from "../assets/images/mcmastereng.avif";
import mhirj from "../assets/images/mhirj.png";

export const experiences = [
    {
      position: "Software Engineer",
      cardColor: "rgb(37, 36, 36)",
      logo: teslaLogo,
      present: true,
      fromdate: {
        year: 2022,
        month: "July",
      },
      todate: {
        year: 0,
        month: "0",
      },
      skills: ["Golang", "Java", "Python", "TCL", "React", "Kubernetes"],
      description: [
        "Designed and implemented a notification system using Kafka,Kubernetes, and Golang, generating an estimated $18.8M in business impact.",
        "Engineered and optimized an ETL pipeline for efficient data consumption via gRPC and REST APIs, leveraging MySQL and Golang.",
        "Led DevOps initiatives, managing infrastructure and CI/CD automation processes.",
        "Led technical presentations and authored comprehensive design documents, facilitating effective problem-solving across the organization.",
      ],
    },
    {
      position: "Project Coordinator",
      cardColor: "white",
      logo: bombardier,
      present: false,
      fromdate: {
        year: 2019,
        month: "May",
      },
      todate: {
        year: 2020,
        month: "Aug",
      },
      skills: ["Golang", "Java", "Python", "TCL", "React", "Kubernetes"],
      description: [
        "Chaired monthly meetings with Managers and Senior Director, providing status updates on critical projects.",
        "Managed over 50 projects, ensuring budget and schedule adherence.",
        "Created a Python program for Oracle database access."
      ],
    },
    {
      position: "Lead Coordinator",
      cardColor: "white",
      logo: mhirj,
      present: false,
      fromdate: {
        year: 2019,
        month: "Sept",
      },
      todate: {
        year: 2020,
        month: "Aug",
      },
      skills: ["Golang", "Java", "Python", "TCL", "React", "Kubernetes"],
      description: [
        "Spearheaded communications between Bombardier and partner universities, fostering strong academic-industry relationships.",
        "Managed a team of 6 professionals, overseeing university collaborations and successfully recruiting 26 interns.",
        "Negotiated university contracts, resulting in a 2% reduction in cost overhead and improved resource allocation.",
      ],
    },
    {
      position: "Discrete Mathematics TA",
      cardColor: "rgba(122,0,60,255)",
      logo: mac,
      present: false,
      fromdate: {
        year: 2019,
        month: "Jan",
      },
      todate: {
        year: 2019,
        month: "April",
      },
      skills: ["Golang", "Java", "Python", "TCL", "React", "Kubernetes"],
      description: [
        "Facilitated learning of Haskell and computer science concepts for 50+ students, enhancing comprehension of course material.",
        "Conducted student consultations, graded assignments, and led classes, contributing to above-average class performance.",
      ],
    },
    {
      position: "Engineering Camp Counselor",
      cardColor: "white",
      logo: mac2,
      present: false,
      fromdate: {
        year: 2019,
        month: "April",
      },
      todate: {
        year: 2018,
        month: "Sept",
      },
      skills: ["Golang", "Java", "Python", "TCL", "React", "Kubernetes"],
      description: [
        "Introduced Software Engineering concepts to over 250 children through Python, Arduino, and web projects.",
        "Travelled across the city of Hamilton to present STEM lectures to over 100 students.",
      ],
    },
  ];
  

  function ExperienceContent(experience) {
    const bull = (
      <Box
        component="span"
        sx={{
          display: "inline-block",
          mx: "2px",
          fontWeight: "bold",
          transform: "scale(1.5)",
          color: "rgb(111, 238, 255)",
          padding: "0 5px",
        }}
      >
        •
      </Box>
    );
    return (
      <div className="experience">
        <div className="carousel-inner-top">
          <Typography sx={{ fontFamily: 'Courier New, monospace' }} className="position" gutterBottom variant="h4">
            {experience.position}
          </Typography>
          <Typography
            gutterBottom
            variant="overline" 
            sx={{ color: "rgb(111, 238, 255)", fontFamily: 'Courier New, monospace'  }}
          >
            {experience.fromdate.month} {experience.fromdate.year}  <span className="separator"> - </span>
            {experience.present ? <span className="present">Present</span>: <>  {experience.todate.month} {experience.todate.year}  </> }
      
          </Typography>
    
            <Typography variant="subtitle2" component="div" sx={{ fontFamily: 'Courier New, monospace' }}>
              Golang {bull} Java {bull} Python {bull} TCL
            </Typography>
     
          <Typography variant="subtitle2" component="div" sx={{ fontFamily: 'Courier New, monospace' }}>
            React {bull} Kubernetes {bull} Docker {bull} Kafka
          </Typography>
        </div>
        <Divider
          variant="middle"
          sx={{ width: "100%", borderColor: "rgb(255, 255, 255,0.22)" }}
        />
        <div className="carousel-inner-bottom">
        <Stack direction="column" spacing={3}>
          {experience.description.map((desc) => (
            <Typography
              variant="body1"
              sx={{ fontFamily: "Courier New, monospace" }}
            >
              <AddTaskIcon
                sx={{
                  verticalAlign: "middle",
                  paddingRight: "5px",
                  color: "rgb(111, 238, 255)",
                }}
              />
              {desc}
            </Typography>
          ))}
        </Stack>
    
        </div>
      </div>
    );
  }

  export default ExperienceContent
