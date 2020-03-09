import React from "react";
import PropTypes from "prop-types";
import Color from "./Color";
import "../../stylesheets/ColorList.scss";

const ColorList = ({
  colors = [],
  onRate = f => f,
  onRemove = f => f,
  onMouseEnter = f => f,
  onMouseLeave = f => f
}) => (
  <div className="color-list">
    {colors.length === 0 ? (
      <p>No Colors Listed. (Add a Color)</p>
    ) : (
      colors.map(color => (
        <Color
          key={color.id}
          {...color}
          onMouseLeave={rating => onMouseLeave(color.id)}
          onMouseEnter={rating => onMouseEnter(color.id, rating)}
          onRate={rating => onRate(color.id, rating)}
          onRemove={() => onRemove(color.id)}
        />
      ))
    )}
  </div>
);

ColorList.propTypes = {
  colors: PropTypes.array,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onRate: PropTypes.func,
  onRemove: PropTypes.func
};

export default ColorList;
