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
          idCount: 3
        }
      }
    addProductToProductList = (newProduct) => {
        const newProductList = [...this.state.productList]
        const newIdCount = this.state.idCount + 1
        newProductList.push(newProduct)
        this.setState({productList: newProductList, idCount: newIdCount})
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
        
        if(newCartList.includes(this.state.productList[index]) === false) {
        let product = this.state.productList[index]
        newCartList.push(product)
        newCartList[newCartList.indexOf(product)]['qty'] = 1
        } else {
            const updateQtyIndex = newCartList.indexOf(this.state.productList[index])
            newCartList[updateQtyIndex].qty += 1
        }

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
                    idCount={this.state.idCount}
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