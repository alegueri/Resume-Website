import "../styles/App.css";
import "../styles/resume.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import React, { useState } from "react";
import { experiences } from '../utils/Experience'
import ExperienceContent from "../utils/Experience";
import FlipCard from "../utils/FlipCard";

function PrevArrow(props) {
  const { className, style, onClick, isFlipped, setIsFlipped } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        fontSize: "24px",
        color: "white",
        zIndex: 1,
      }}
      onClick={(e) => {
        if (onClick) onClick(e); // Keep the existing onClick functionality
        if (isFlipped) setIsFlipped(true); // Set isFlipped to true on click
      }}
    >
      <i className="fas fa-chevron-left"></i>
    </div>
  );
}

function NextArrow(props) {
  const { className, style, onClick, isFlipped, setIsFlipped } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        fontSize: "24px",
        color: "white",
        zIndex: 1,
      }}
      onClick={(e) => {
        if (onClick) onClick(e); // Keep the existing onClick functionality
        if (isFlipped) setIsFlipped(true); // Set isFlipped to true on click
      }}
    >
      <i className="fas fa-chevron-right"></i>
    </div>
  );
}


function Experience() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFlippedArray, setIsFlippedArray] = useState(
    Array(experiences.length).fill(false) // Creates an array with a `false` entry for each `experience`
  );

  const handleFlip = (index) => {
    setCurrentIdx(index);
    setIsFlippedArray((prevState) => {
      const newArray = [...prevState];
      newArray[index] = !newArray[index];
      return newArray;
    });
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    lazyLoad: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: (
      <NextArrow
        isFlipped={isFlippedArray[currentIdx]}
        setIsFlipped={() => handleFlip(currentIdx)}
      />
    ),
    prevArrow: (
      <PrevArrow
        isFlipped={isFlippedArray[currentIdx]}
        setIsFlipped={() => handleFlip(currentIdx)}
      />
    ),
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="main-resume" id="resume" style={{ margin: "0 auto" }}>
      <div className="resume-header" data-aos="zoom-in-up">
        <h1>Let's dive deeper ...</h1>
      </div>

      <Slider {...settings}>
        {experiences.map((experience, index) => (
          <FlipCard
            color={experience.cardColor}
            isFlipped={isFlippedArray[index]}
            setIsFlipped={() => handleFlip(index)}
            frontContent={<img src={experience.logo} />}
            backContent={ExperienceContent(experience)}
          />
        ))}
      </Slider>
    </div>
  );
}

export default Experience;
