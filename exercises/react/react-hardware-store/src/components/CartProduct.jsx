import React from 'react';

const CartProduct = ({ productName, price, description, qty}) => {
        return (
            <div>
                <h3>{productName}</h3>
                <h4>${(price * qty).toFixed(2)}</h4>
                Qty: {qty}
                <p>{description}</p>
            </div>
        )
    }

export default CartProduct;