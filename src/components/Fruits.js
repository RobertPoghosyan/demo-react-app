import React, { Component } from "react";

class Fruits extends Component {
  render() {
    let { fruits } = this.props;
    return <div>Product name : {fruits}</div>;
  }
}

export default Fruits;
