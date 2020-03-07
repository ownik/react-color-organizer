import React from "react";
import { v4 } from "uuid";
import StarRating from "./StarRating.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rating: 0, lastClicked: 0 };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.rateColor = this.rateColor.bind(this);
  }

  rateColor(rating) {
    console.log("rate");
    this.setState({ rating, lastClicked: rating });
  }

  mouseEnter(rating) {
    this.setState({ rating });
  }

  mouseLeave() {
    this.setState({ rating: this.state.lastClicked });
  }

  render() {
    return (
      <StarRating
        starsSelected={this.state.rating}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
        onRate={this.rateColor}
      />
    );
  }
}
