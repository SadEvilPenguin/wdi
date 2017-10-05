import React, {Component} from 'react'

class Specialty extends Component {
    render() {
        return (
            <div className="specialty">
                <img src={this.props.imageUrl} className="specialImage" alt={`${this.props.name} Logo`}/>
                <h2>{this.props.name}</h2>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default Specialty