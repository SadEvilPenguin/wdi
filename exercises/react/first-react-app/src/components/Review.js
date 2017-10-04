import React, { Component } from 'react'

class Review extends Component {
    render() {
        return (
            <div className="review">
                <h3>{ this.props.title }</h3>
                <p>{ this.props.description }</p>
                <p>By: { this.props.author }</p>
            </div>
        )
    }
}

export default Review