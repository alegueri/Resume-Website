import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import { Box } from "@mui/material";
import Slide from "@mui/material/Slide";
// todo: refactor/format

// ---- icons ----
import MenuIcon from "@mui/icons-material/Menu";
import { MenuOpen } from "@mui/icons-material";
import WorkIcon from '@mui/icons-material/Work';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Person3Icon from '@mui/icons-material/Person3';
import HomeIcon from '@mui/icons-material/Home';

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control menu open/close
  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle the FAB menu
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start"});
    }
};

  const buttonStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    color: "#000",
    borderRadius: "30px",
    width: 160,
    height: 60,
    textTransform: "none",
    paddingLeft: "20px",
    gap: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    display: "flex", // Flexbox to align text and icons
    alignItems: "center", // Vertical alignment
    justifyContent: "flex-start",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 1)",
    },
  };

  const buttonDistance = 80;
  return (
    <Box sx={{ position: "fixed", bottom: 20, right: 20 , zIndex:"1"}}>
      <Fab
        aria-label="Menu"
        onClick={handleToggle}
        sx={{
          height: 80,
          width: 80,
          backgroundColor: isOpen
            ? "rgba(255, 255, 255, 0.9)"
            : "rgba(255, 255, 255, 0.5)",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          },
        }}
      >
        {isOpen ? <MenuOpen /> : <MenuIcon />}
      </Fab>
      {isOpen && (
        <div>
            <Slide in={isOpen} direction="left" timeout={600}>
            <Fab
              variant="extended"
              sx={{
                ...buttonStyle,
                position: "absolute",
                bottom: 40 + buttonDistance * Math.sin(Math.PI / 2),
                right: buttonDistance * Math.cos(Math.PI / 2),
              }}
              onClick={() => {
                setIsOpen(false);
                scrollToSection("achievement");
              }}
            >
              <MenuBookIcon />
              Projects
            </Fab>
          </Slide>
          <Slide in={isOpen} direction="left" timeout={600}>
            <Fab
              variant="extended"
              sx={{
                ...buttonStyle,
                position: "absolute",
                bottom: 120 + buttonDistance * Math.sin(Math.PI / 2),
                right: buttonDistance * Math.cos(Math.PI / 2),
              }}
              onClick={() => {
                setIsOpen(false);
                scrollToSection("education");
              }}
            >
              <MenuBookIcon />
              Education
            </Fab>
          </Slide>
          <Slide in={isOpen} timeout={400} direction="left" unmountOnExit>
            <Fab
              variant="extended"
              color="secondary"
              aria-label="download"
              sx={{
                ...buttonStyle,
                position: "absolute",
                bottom: 200 + buttonDistance * Math.sin(Math.PI / 2),
                right: buttonDistance * Math.cos(Math.PI / 2),
              }}
              onClick={() => {
                setIsOpen(false);
                scrollToSection("resume");
              }}
            >
              <WorkIcon />
              Work
            </Fab>
          </Slide>

          <Slide in={isOpen} direction="left" timeout={300}>
            <Fab
              variant="extended"
              aria-label="navigate"
              sx={{
                ...buttonStyle,
                position: "absolute",
                bottom: 280 + buttonDistance * Math.sin(Math.PI / 2),
                right: buttonDistance * Math.cos(Math.PI / 2),
              }}
              onClick={() => {
                setIsOpen(false);
                scrollToSection("aboutme");
              }}
            >
              <Person3Icon />
              About me
            </Fab>
          </Slide>

          <Slide in={isOpen} direction="left" timeout={200}>
            <Fab
              variant="extended"
              sx={{
                ...buttonStyle,
                position: "absolute",
                bottom: 360 + buttonDistance * Math.sin(Math.PI / 2),
                right: buttonDistance * Math.cos(Math.PI / 2),
              }}
              onClick={() => {
                setIsOpen(false);
                scrollToSection("home");
              }}
            >
              <HomeIcon />
              Home
            </Fab>
          </Slide>
        </div>
      )}
    </Box>
  );
};

export default MenuButton;
