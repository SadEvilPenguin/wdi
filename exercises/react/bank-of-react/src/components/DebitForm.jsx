import React, { Component } from 'react';
import axios from 'axios'

class DebitForm extends Component {
    state = {
        newDebit: {
            description: '',
            amount: ''
        }
    }

    handleChange = (event) => {
        const newDebit = {...this.state.newDebit}
        newDebit[event.target.name] = event.target.value
        this.setState({newDebit})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const clearForm = {
            description: '',
            amount: ''
        }
        const payload = {
            id: Math.random() * 10000,
            description: this.state.newDebit.description,
            amount: this.state.newDebit.amount,
            date: String(new Date())
        };
        this.props.updateDebits(payload)
        this.setState({newDebit: clearForm})

        // axios.post("http://localhost:4000/debits/", payload)
        // .then(() => {
        //         this.props.getDebits()
        //         this.setState({newDebit: clearForm})
        // });
    }

    render() {
        return (
            <div>
                <h4>New Debit</h4>
                <form onSubmit={this.handleSubmit}>
                    <label>Description</label>
                    <input type="text" name="description" value={this.state.newDebit.description} onChange={this.handleChange} /><br />
                    <label>Amount</label>
                    <input type="number" name="amount" value={this.state.newDebit.amount} onChange={this.handleChange} /><br />
                    <input type="submit" value="Add Debit"/>
                </form>
            </div>
        );
    }
}

export default DebitForm;