import React, { Component } from 'react';
import axios from 'axios'

class CreditForm extends Component {
    state = {
        newCredit: {
            description: '',
            amount: ''
        }
    }

    handleChange = (event) => {
        const newCredit = {...this.state.newCredit}
        newCredit[event.target.name] = event.target.value
        this.setState({newCredit})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const clearForm = {
            description: '',
            amount: ''
        }
        const payload = {
            id: Math.random() * 10000,
            description: this.state.newCredit.description,
            amount: this.state.newCredit.amount,
            date: String(new Date())
        };
        
        //---Functionality to push new credit to state instead of the API ---//
        // this.props.updateCredits(payload)
        // this.setState({newCredit: clearForm})


        //---Functionality to push new credit to api data. Had to update api app ---//
        axios.post("http://localhost:4000/credits", payload)
        .then(() => {
                this.props.getCredits()
                this.setState({newCredit: clearForm})
        });
    }
    
    render() {
        return (
            <div>
                <h4>New Credit</h4>
                <form onSubmit={this.handleSubmit}>
                    <label>Description</label>
                    <input type="text" name="description" value={this.state.newCredit.description} onChange={this.handleChange} /><br />
                    <label>Amount</label>
                    <input type="number" name="amount" value={this.state.newCredit.amount} onChange={this.handleChange} /><br />
                    <input type="submit" value="Add Credit"/>
                </form>
            </div>
        );
    }
}

export default CreditForm;