import React, {Component} from 'react';

class AdminForm extends Component {
    constructor() {
        super();

        this.state = {
            //Save the users input
            newForm: {
                productName: '',
                price: '',
                description: ''
            }
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addProductToProductList(this.state.newForm)
        const emptyForm = {
            productName: '',
            price: '',
            description: ''
        }
        this.setState({newForm: emptyForm})
    }

    handleNewProductChange = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;
        //clones a new object using spread operator
        const newForm = {
            ...this.state.newForm
        };
        //using brace syntax to select object key
        newForm[attributeName] = attributeValue;
        //Take cloned object and apply ot to exisiting state
        this.setState({newForm})
    };

    render() {
        return (
            <div>
                {/* value is equal to what we want to change in state */}
                {/* name is equal to the key we want to edit in the object */}
                {/* onChange is the event listener that updates the state with the user input */}
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            onChange={this.handleNewProductChange}
                            type="text"
                            placeholder="Name"
                            name="productName"
                            value={this.state.newForm.productName}/>
                    </div>
                    <div>
                        <input
                            onChange={this.handleNewProductChange}
                            type="text"
                            placeholder="Price"
                            name="price"
                            value={this.state.newForm.price}/>
                    </div>
                    <div>
                        <input
                            onChange={this.handleNewProductChange}
                            type="text"
                            placeholder="Description"
                            name="description"
                            value={this.state.newForm.description}/>
                    </div>
                    <div>
                        <button>Create A Product</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AdminForm;