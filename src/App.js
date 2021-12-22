import './App.css';
// Your API key is: 11a7d98704394439a16e4b1c90a5b18b

 //rcc

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    );
  }
}

export default App;


