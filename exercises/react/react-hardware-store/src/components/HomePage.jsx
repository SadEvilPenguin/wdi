import React, { Component } from 'react'
import Header from './Header.jsx'
import Shop from './Shop.jsx'

class HomePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Shop />

            </div>
        )
    }
}

export default HomePage