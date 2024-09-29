function FlipCard({
    frontContent,
    backContent,
    color,
    isFlipped,
    setIsFlipped,
  }) {
    const handleFlip = () => setIsFlipped(!isFlipped);
  
    return (
      <div className="carousel-slide" data-aos="zoom-in-up">
        <div
          className={`flip-card ${isFlipped ? "flipped" : ""} `}
          onClick={handleFlip}
        >
          {isFlipped ? (
            <div className="flip-card-back">{backContent}</div>
          ) : (
            <div className="flip-card-front" style={{ backgroundColor: color }}>
              {frontContent}
            </div>
          )}
        </div>
      </div>
    );
  }

  export default FlipCard;
