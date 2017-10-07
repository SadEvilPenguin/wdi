import React, { Component } from 'react';
import CartProduct from './CartProduct.jsx'

class CartView extends Component {
    render() {
        return (
            <div>
                <h1>Cart View</h1>
                <h2>Products</h2>
                <div>
                    {this.props.cartList.map((product, index) => {
                            return (
                                <div key={index}>
                                    <CartProduct
                                        productName={product.productName}
                                        price={product.price}
                                        description={product.description}
                                        qty={product.qty}/>
                                        <button onClick={() => this.props.deleteProductFromCartList(index)}>Delete</button>
                                </div>

                            )
                        })}
                </div>
            </div>
        );
    }
}

export default CartView;