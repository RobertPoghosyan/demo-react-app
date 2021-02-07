import React, { Component } from "react";

class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: props.price,
      rate: 487,
    };
  }

  changeCurrency = () => {
    let { price, rate } = this.state;
    let symbol = price[price.length - 1];

    if (symbol === "$") {
      price = parseFloat(price) * rate + "֏";
    } else if (symbol === "֏") {
      price = parseFloat(price) / rate + "$";
    } /*else {
            alert('wrong currency')
        }*/

    this.setState({ price });
  };

  render() {
    let { price } = this.state;
    return (
      <div>
        <span>Product price : {price} </span>
        <button onClick={this.changeCurrency}> Change Currency </button>
      </div>
    );
  }
}

export default Price;
