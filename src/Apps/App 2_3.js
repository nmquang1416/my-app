import React from 'react';
import logo from './logo.svg';
import './App.css';

import Welcome from './Component/welcome';

function Welcome(){
    return(
      <div>
        <h1>
          Hello World😂
        </h1>
      </div>
    )
}


export default function MyApp() {
  return (
    <div className='App'>
      <Welcome />

      <Welcome />

      <Welcome />
    </div>
  );
}





