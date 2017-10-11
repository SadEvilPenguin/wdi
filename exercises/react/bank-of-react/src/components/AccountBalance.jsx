import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class AccountBalance extends Component {
  
render() {
    return (
        <div>
            <h2>Account Balance:</h2>
            <p>Balance: {this.props.accountBalance.toFixed(2)}</p>
            <Link to="/">Home</Link>
        </div>
    );
  }
}

export default AccountBalance;