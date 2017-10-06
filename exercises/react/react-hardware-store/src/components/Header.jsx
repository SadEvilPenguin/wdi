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

    render() {
        return (
            <div className="App">
                <h1>Hardware Store</h1>
                <p>Currently on Sale: {this.state.itemCurrentlyOnSale}</p>
                <div>
                    <span>
                        <button onClick={this.toggleEditSaleItem}>Edit Sale Item</button>
                    </span>
                    <div>
                        {this.state.editSaleItem ? <input type="text" placeholder={this.state.itemCurrentlyOnSale}/> : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;