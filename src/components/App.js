import React from "react";
import { v4 } from "uuid";
import AddColorForm from "./AddColorForm";
import ColorList from "./ColorList";
import "../../stylesheets/App.scss";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: []
    };
    this.addColor = this.addColor.bind(this);
    this.enterColorRating = this.enterColorRating.bind(this);
    this.leaveColorRating = this.leaveColorRating.bind(this);
    this.rateColor = this.rateColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
  }

  addColor(title, color) {
    this.setState(prevState => ({
      colors: [
        ...prevState.colors,
        {
          id: v4(),
          title,
          color,
          rating: 0,
          lastClicked: 0
        }
      ]
    }));
  }

  rateColor(id, rating) {
    this.setState(prevState => ({
      colors: prevState.colors.map(color =>
        color.id !== id
          ? color
          : {
              ...color,
              rating,
              lastClicked: rating
            }
      )
    }));
  }

  enterColorRating(id, rating) {
    this.setState(prevState => ({
      colors: prevState.colors.map(color =>
        color.id !== id
          ? color
          : {
              ...color,
              rating
            }
      )
    }));
  }

  leaveColorRating(id) {
    this.setState(prevState => ({
      colors: prevState.colors.map(color =>
        color.id !== id
          ? color
          : {
              ...color,
              rating: color.lastClicked
            }
      )
    }));
  }

  removeColor(id) {
    this.setState(prevState => ({
      colors: prevState.colors.filter(color => color.id !== id)
    }));
  }

  render() {
    const { addColor, rateColor, removeColor } = this;
    const { colors } = this.state;
    return (
      <div className="app">
        <AddColorForm onNewColor={addColor} />
        <ColorList
          colors={colors}
          onRate={rateColor}
          onRemove={removeColor}
          onMouseEnter={this.enterColorRating}
          onMouseLeave={this.leaveColorRating}
        />
      </div>
    );
  }
}
