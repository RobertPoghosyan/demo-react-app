import React, { Component } from "react";

class Description extends Component {
  render() {
    let { description } = this.props;
    return <div>Description : {description}</div>;
  }
}

export default Description;
