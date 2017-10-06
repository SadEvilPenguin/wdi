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
              description: 'Itsa hammer',
              price: 12.3
            },
            {
              productName: 'Nail',
              description: 'Itsa nail',
              price: 0.12
            }
          ]
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
                    /> : <ShopView productList={this.state.productList}/> }
                </div>
                <CartView />
            </div>
            </div>
        );
    }
}

export default Shop;