import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import DebitList from './DebitList'

class DebitView extends Component {
    render() {
        return (
            <div>
                <h2>Debits</h2>
                <div>
                    <DebitList debits={this.props.debits} />
                </div>
            </div>
        );
    }
}

export default DebitView;