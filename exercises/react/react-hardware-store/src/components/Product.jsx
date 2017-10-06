
import React, { Component } from "react";


const Product = ({ productName, price, description}) => {
    return (
        <div>
          <h3>{productName}</h3>
          <h4>${price}</h4>
          <p>{description}</p>
        </div>
      )
}



// class Product extends Component {
//   render() {
//     return (
//       <div>
//         <h3>{this.props.productName}</h3>
//         <h4>${this.props.price}</h4>
//         <p>{this.props.description}</p>
//       </div>
//     )
//   }
// }

export default Product;