import React, { Component } from 'react';
import ShopView from './ShopView.jsx'
import AdminView from './AdminView'
import CartView from './CartView.jsx'

class Shop extends Component {
    constructor() {
        super()

        this.state = {
        isAdmin: true,
        productList: [
            {
              productName: 'Hammer',
              description: "It's hammer",
              price: 12.3,
              id: 1
            },
            {
              productName: 'Nail',
              description: `It's a nail`,
              price: 0.12,
              id: 2
            }
          ],
          cartList: [],
          id: 3
        }
      }
    addProductToProductList = (newProduct) => {
        const newProductList = [...this.state.productList]
        newProductList.push(newProduct)
        this.setState({productList: newProductList})
    }
    
    deleteProductFromProductList = (index) => {
        const newProductList = [...this.state.productList]
        newProductList.splice(index, 1)
        this.setState({productList: newProductList})
    }

    toggleIsAdmin = () => {
        this.setState({isAdmin: !this.state.isAdmin})
    }

    addToCart = (index) => {
        const newCartList = [...this.state.cartList]
        newCartList.push(this.state.productList[index])
        this.setState({cartList: newCartList})
    }

    deleteProductFromCartList = (index) => {
        const newCartList = [...this.state.cartList]
        newCartList.splice(index, 1)
        this.setState({cartList: newCartList})
    }

    render() {
        return (
            <div>
            <button onClick={this.toggleIsAdmin}>Toggle Admin</button>
            <hr />
            <div className="shop">
                <div className="products">
                    {this.state.isAdmin ? <AdminView 
                    productList={this.state.productList} 
                    addProductToProductList={this.addProductToProductList} 
                    deleteProductFromProductList={this.deleteProductFromProductList} 
                    /> : <ShopView productList={this.state.productList} 
                    addToCart={this.addToCart} /> }
                </div>
                <div className="cart">
                <CartView 
                cartList={this.state.cartList} 
                deleteProductFromCartList={this.deleteProductFromCartList}/>
                </div>
            </div>
            </div>
        );
    }
}

export default Shop;