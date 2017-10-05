import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Profile from './components/Profile.jsx'
import SpecialtiesList from './components/SpecialtiesList.jsx'

class App extends Component {
    render() {
        return ( 
        <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            </header> 
            <div className="App">
            <Profile />
            <SpecialtiesList />
            </div> 
        </div>
        );
    }
}

export default App;