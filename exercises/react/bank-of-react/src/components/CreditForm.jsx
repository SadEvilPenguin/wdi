import React, { Component } from 'react';

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
        this.props.updateCredits(payload)
        this.setState({newCredit: clearForm})


        //Use if I decide to update APi to work with this
        // axios.post("http://localhost:4000/debits", payload)
        // .then(() => {
        //         this.props.getDebits()
        //         this.setState({newDebit: clearForm})
        // });
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