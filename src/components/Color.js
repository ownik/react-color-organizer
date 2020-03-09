import React from "react";
import PropTypes from "prop-types";
import StarRating from "./StarRating";
import "../../stylesheets/Color.scss";

const Color = ({
  title,
  color,
  rating = 0,
  onRemove = f => f,
  onMouseEnter = f => f,
  onMouseLeave = f => f,
  onRate = f => f
}) => (
  <section className="color">
    <h1>{title}</h1>
    <button onClick={onRemove}>X</button>
    <div className="color" style={{ backgroundColor: color }} />
    <div>
      <StarRating
        starsSelected={rating}
        onRate={onRate}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </div>
  </section>
);

Color.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rating: PropTypes.number,
  onRemove: PropTypes.func,
  onRate: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
};

export default Color;
