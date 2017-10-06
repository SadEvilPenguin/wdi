import React/*, { Component }*/ from "react";


const Product = ({ productName, price, description}) => {
    // const deleteProduct = () => {
    //     deleteProductFromProductList(index)
    // }

    return (
        <div>
          <h3>{productName}</h3>
          <h4>${price}</h4>
          <p>{description}</p>
          {/* <button onClick={deleteProduct}>Delete</button> */}
        </div>
      )
}



// class Product extends Component {
//     deleteProduct = (event) => {
//         event.preventDefault()
//         this.props.deleteProductFromProductList(this.props.index)
//     }

//   render() {
//     return (
//       <div>
//         <h3>{this.props.productName}</h3>
//         <h4>${this.props.price}</h4>
//         <p>{this.props.description}</p>
//         <button onClick={this.deleteProduct}>Delete</button>
//       </div>
//     )
//   }
// }

export default Product;