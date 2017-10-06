import React, { Component } from 'react'
import Product from './Product'

class AdminView extends Component {
  constructor () {
    super()

    this.state = {
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
  render () {
    return (
      <div>
        <h1>Admin View</h1>
        <h2>Products</h2>
        <div>
          { this.state.productList.map((product, index) => {
            return (
              <Product key={index} productName={product.productName} price={product.price} description={product.description}/>
            )
          }) }
        </div>
        <h2>Create A New Product</h2>
        <form >
          <div>
            <input type="text" placeholder="Name"/>
          </div>
          <div>
            <input type="text" placeholder="Price"/>
          </div>
          <div>
            <input type="text" placeholder="Description"/>
          </div>
          <div>
            <button>Create A Product</button>
          </div>
        </form>
      </div>
    )
  }
}

export default AdminView