import React, {Component} from 'react';
import EditSaleItem from  './EditSaleItem.jsx'

class Header extends Component {
    constructor() {
        super()

        this.state = {
            itemCurrentlyOnSale: 'A Hammer!',
            editSaleItem: false
        }
    }

    toggleEditSaleItem = () => {
        this.setState({editSaleItem: !this.state.editSaleItem})
    }
    handleItemCurrentlyOnSaleChange = (event) => {
        const itemCurrentlyOnSale = event.target.value;
        this.setState({itemCurrentlyOnSale});
      }

    render() {
        return (
            <div className="App">
                <h1>Hardware Store</h1>
                <p>Currently on Sale: {this.state.itemCurrentlyOnSale}</p>
                <EditSaleItem 
                itemCurrentlyOnSale={this.state.itemCurrentlyOnSale} 
                editSaleItem={this.state.editSaleItem} 
                toggleEditSaleItem={this.toggleEditSaleItem} 
                handleItemCurrentlyOnSaleChange={this.handleItemCurrentlyOnSaleChange} />
            </div>
        );
    }
}

export default Header;