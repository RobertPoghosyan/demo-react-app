import React, { Component } from "react";

import Fruits from "./Fruits";
import Price from "./Price";
import Description from "./Description";

class Product extends Component {
  render() {
    let { fruits, price, description } = this.props;
    return (
      <div>
        <Fruits fruits={fruits} />
        <Price price={price} />
        <Description description={description} />
      </div>
    );
  }
}

export default Product;
