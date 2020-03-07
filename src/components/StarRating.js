import React from "react";
import PropTypes from "prop-types";
import Star from "./Star.js";

const StarRating = ({
  starsSelected = 0,
  totalStars = 5,
  onMouseEnter = f => f,
  onMouseLeave = f => f,
  onRate = f => f
}) => (
  <div>
    <div className="star-rating" onMouseLeave={onMouseLeave}>
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={i < starsSelected}
          onClick={() => onRate(i + 1)}
          onMouseEnter={() => onMouseEnter(i + 1)}
        />
      ))}
    </div>
    <p>
      {starsSelected} of {totalStars} stars
    </p>
  </div>
);

StarRating.propTypes = {
  starsSelected: PropTypes.number,
  totalStars: PropTypes.number,
  onRate: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
};

export default StarRating;
