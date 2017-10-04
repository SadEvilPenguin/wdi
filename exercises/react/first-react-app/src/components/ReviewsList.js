import React, { Component } from  'react'

import Review from './Review'

class ReviewsList extends Component {
    render() {
        const reviews = this.props.reviews
        const reviewComponents = reviews.map((review) => {
          return <Review title={review.title} description={review.description} author={review.author} />
        })
        return (
            <div>
                { reviewComponents }
            </div>
        )
    }
}

export default ReviewsList