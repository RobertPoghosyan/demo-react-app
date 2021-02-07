import React, { Component } from "react";

class Lesson6 extends Component {
  state = {
    value: "",
    showValue: "",
    showText: true,
    animals: [
      {
        name: "Dog",
        weight: 10,
      },
      {
        name: "Cat",
        weight: 5,
      },
    ],
  };
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleClick = () => {
    this.setState({ showValue: this.state.value });
  };

  toggleText = () => {
    this.setState({ showText: !this.state.showText });
  };

  render() {
    let { value } = this.state;
    let { showValue } = this.state;
    let { showText } = this.state;
    let animals = this.state.animals.map((item, index) => (
      <p key={index}>
        Name : {item.name} , Weight: {item.weight} kg{" "}
      </p>
    ));

    return (
      <div>
        <input onChange={this.handleChange} type="text"></input>
        <button onClick={this.handleClick}> Add </button>
        <p>{showValue}</p>
        <p>{value}</p>

        <button onClick={this.toggleText}>{showText ? "Hide" : "Show"}</button>

        {showText && <p> Testing text </p>}

        {animals}
      </div>
    );
  }
}

export default Lesson6;
