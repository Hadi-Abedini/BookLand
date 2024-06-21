import React, { useState } from "react";
import PropTypes from "prop-types";

const Rating = ({ totalStars, rating, setRating }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (index) => {
    setRating(index + 1);
  };

  const handleMouseEnter = (index) => {
    setHoverRating(index + 1);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className="flex flex-row gap-[2px]">
      {Array.from({ length: totalStars }, (v, i) => (
        <Star
          key={i}
          selected={i < (hoverRating || rating)}
          onClick={() => handleClick(i)}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
};

const Star = ({ selected = false, onClick, onMouseEnter, onMouseLeave }) => (
  <span
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    class="fa fa-star checked"
    style={{ cursor: "pointer", color: selected ? "gold" : "grey" }}
  />
);

Rating.propTypes = {
  totalStars: PropTypes.number,
};

Rating.defaultProps = {
  totalStars: 5,
};

export default Rating;
