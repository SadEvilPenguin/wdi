import React, { Component } from  'react'

import Movie from './Movie'

class MoviesList extends Component {
    render() {
        const movies = [{title: 'Blade Runner 2049', rating: 'R', description: 'scenester bicycle rights meh Neutra next level crucifix letterpress farm-to-table authentic sartorial aesthetic Tonx Godard photo booth Marfa leggings deep v bespoke Odd Future fap pug dreamcatcher typewriter PBR raw denim hashtag XOXO beard hella Austin'},
        {title: 'Blade Runner', rating: 'G', description: '8-bit blog McSweeneys mustache Portland master cleanse Bushwick 3 wolf moon Banksy tofu heirloom vinyl messenger bag Wes Anderson cliche squid mumblecore twee banh mi pork belly before they sold out freegan Truffaut vegan chillwave retro church-key roof party mlkshk distillery butcher cornhole Cosby sweater 90s meggings sustainable mixtape Tumblr kale chips VHS keytar trust fund narwhal direct trade  small batch plaid four loko synth irony pickled chia Intelligentsia cred skateboard kogi gastropub'},
        {title: 'Back to the future', rating: 'PG-13', description: '8-bit blog McSweeneys mustache Portland master cleanse Bushwick 3 wolf moon Banksy tofu heirloom vinyl messenger bag Wes Anderson cliche squid mumblecore twee banh mi pork belly before they sold out freegan Truffaut vegan chillwave retro church-key roof party mlkshk distillery butcher cornhole Cosby sweater 90s meggings sustainable mixtape Tumblr kale chips VHS keytar trust fund narwhal direct trade  small batch plaid four loko synth irony pickled chia Intelligentsia cred skateboard kogi gastropub'},
        {title: 'Back to the future II', rating: 'PG', description: '8-bit blog McSweeneys mustache Portland master cleanse Bushwick 3 wolf moon Banksy tofu heirloom vinyl messenger bag Wes Anderson cliche squid mumblecore twee banh mi pork belly before they sold out freegan Truffaut vegan chillwave retro church-key roof party mlkshk distillery butcher cornhole Cosby sweater 90s meggings sustainable mixtape Tumblr kale chips VHS keytar trust fund narwhal direct trade  small batch plaid four loko synth irony pickled chia Intelligentsia cred skateboard kogi gastropub'}]
    
        const movieComponents = movies.map((movie) => {
          return <Movie title={movie.title} rating={movie.rating} description={movie.description} />
        })
        return (
            <div>
                { movieComponents }
            </div>
        )
    }
}

export default MoviesList