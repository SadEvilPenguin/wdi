import React, { Component } from 'react';

import ReviewsList from './ReviewsList';

class Movie extends Component {
    render() {
        return ( 
            <div className="movie"> 
                <h1>{ this.props.title }</h1>

                <div>Rating: { this.props.rating }</div>

                <p>
                    { this.props.description }
                </p>
                <h3>Reviews:</h3>
                <ReviewsList reviews={this.props.reviews}/>
            </div>
        )
    }
}

export default Movie;