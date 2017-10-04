import React, { Component } from 'react'

class Review extends Component {
    render() {
        return (
            <div className="review">
                <h3>{ this.props.title }</h3>
                <p className="description">{ this.props.description }</p>
                <p className="author">By: { this.props.author }</p>
            </div>
        )
    }
}

export default Review