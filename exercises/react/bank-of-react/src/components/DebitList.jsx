import React, { Component } from 'react';

class DebitList extends Component {
    render() {
        const debits = this.props.debits.map((debit) => (
            <div key={debit.id} className="transaction">
                <p>{debit.description}</p>
                <p>Amount: {debit.amount}</p>
                <p>Date: {debit.date}</p>
            </div>
        ))
        return (
            <div>
                {debits}
            </div>
        );
    }
}

export default DebitList;