import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/Star.scss";

const Star = ({
  selected = false,
  onClick = f => f,
  onMouseEnter = f => f
}) => (
  <div
    className={selected ? "star selected" : "star"}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
  />
);

Star.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
};

export default Star;
