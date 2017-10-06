import React, {Component} from 'react';

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
                <div>
                    <span>
                        <button onClick={this.toggleEditSaleItem}>{this.state.editSaleItem ? 'Hide' : 'Edit'} Sale Item</button>
                    </span>
                    <div>
                        {this.state.editSaleItem ? <input type="text" onChange={this.handleItemCurrentlyOnSaleChange} placeholder={this.state.itemCurrentlyOnSale}/> : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;