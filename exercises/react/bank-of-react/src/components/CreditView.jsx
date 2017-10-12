import React, { Component } from 'react';
import CreditList from './CreditList'
import CreditForm from './CreditForm'
import {Link} from 'react-router-dom'

class CreditView extends Component {
    render() {
        return (
            <div>
                <h2>Credits</h2>
                <div>
                    <Link to="/">Home</Link>
                    <h4>Account: Balance: {Number(this.props.accountBalance).toFixed(2)}</h4>
                    <CreditForm getCredits={this.props.getCredits}  updateCredits={this.props.updateCredits}/>
                    <CreditList credits={this.props.credits} />
                </div>
            </div>
        );
    }
}

export default CreditView;