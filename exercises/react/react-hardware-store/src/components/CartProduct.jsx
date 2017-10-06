import React from 'react';

const CartProduct = ({ productName, price, description}) => {
        return (
            <div>
                <h3>{productName}</h3>
                <h4>${price}</h4>
                <p>{description}</p>
            </div>
        )
    }

export default CartProduct;