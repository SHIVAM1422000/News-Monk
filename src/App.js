// Your API key is: 11a7d98704394439a16e4b1c90a5b18b
 //rcc

import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
// import News key="ffef" from './components/News key="ffef"';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
        <Router>
             <div>
           <Navbar/>
           {/* <News key="home" pageSize={20} country="in" category="sports"/> */}
           <Switch>
          <Route exact path="/"><News key="home" pageSize={20} country="in" category="general"/></Route>
          <Route exact path="/index.html"><News key="idx" pageSize={20} country="in" category="general"/></Route>
          <Route exact path="/about"><News key="sports" pageSize={20} country="in" category="sports"/></Route>
          <Route exact path="/business"><News key="business" pageSize={20} country="in" category="business"/></Route>
          <Route exact path="/entertainment"><News key="entertainment" pageSize={20} country="in" category="entertainment"/></Route>
          <Route exact path="/general"><News key="general" pageSize={20} country="in" category="general"/></Route>
          <Route exact path="/health"><News key="health" pageSize={20} country="in" category="health"/></Route>
          <Route exact path="/science"><News key="science" pageSize={20} country="in" category="science"/></Route>
          <Route exact path="/sports"><News key="sports" pageSize={20} country="in" category="sports"/></Route>
          <Route exact path="/technology"><News key="technology" pageSize={20} country="in" category="technology"/></Route>
        </Switch>
         </div>
        </Router>
       
     
    );
  }
}

export default App;


