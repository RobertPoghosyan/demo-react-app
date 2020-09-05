import React, {Component} from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return(
            <div>
            /  Product name:   {this.props.name} /  
                Price:          {this.props.price} /  
                Description:    {this.props.description} /
            </div>
       
        )
    }
};

export default Product;