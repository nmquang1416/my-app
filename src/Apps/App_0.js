import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return ( 
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo'></img>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className='App-Link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
                    Learn React from Dang Kim Thi
                </a>
            </header>
        </div>
     );
}

export default App;