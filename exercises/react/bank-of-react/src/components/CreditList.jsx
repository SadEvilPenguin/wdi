import React, { Component } from 'react';

class CreditList extends Component {
    render() {
        const credits = this.props.credits.map((credit) => (
            <div key={credit.id} className="transaction">
                <p>{credit.description}</p>
                <p>Amount: {credit.amount}</p>
                <p>Date: {credit.date}</p>
            </div>
        ))
        return (
            <div>
                {credits}
            </div>
        );
    }
}

export default CreditList;