import React, { Component } from  'react'

import Review from './Review'

class ReviewsList extends Component {
    render() {
        const reviews = [{title: 'This Movie Rocks', description: 'Iure dolores assumenda in.', author: 'Sven'},
                         {title: 'This Movie Blows',description: 'Fugiat debitis tempora dolores quo a quia autem aperiam. Qui aut repudiandae et praesentium aliquam. Eos blanditiis odio omnis tempore nihil voluptatem doloremque esse optio. Ratione necessitatibus quae. Provident autem delectus dolores mollitia est nam. Quos magni fugit quidem sit unde.',author: 'Kristin Goyette'}, {title: 'This Movie Rocks',description: 'Iure dolores assumenda in.',author: 'Sven'},
                         {title: 'This Movie is Alright',description: 'Tempora et perferendis esse necessitatibus hic reiciendis voluptatem incidunt. Nihil nemo quis ea. Aliquid blanditiis ducimus voluptatum eligendi quia autem a voluptatem. Voluptatibus illum exercitationem ut in et qui consequuntur amet quidem.',author: 'Kamryn Langworth'},
                         {title: 'This Movie is makes me cry',description: 'Nesciunt nulla quisquam nesciunt fuga aliquid. Sint magnam voluptatem vel sapiente dolor eaque exercitationem voluptatem. Ut praesentium repellat qui quo id saepe. Numquam eveniet ad laborum culpa nesciunt. Impedit delectus eum consequatur cumque dolor. Magnam nam optio libero eum et facilis impedit nobis quia.',author: 'Werner Lehner'}]
    
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