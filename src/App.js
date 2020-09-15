import React, { Component } from 'react';
import MainContainer from './Components/MainContainer'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={MainContainer}></Route>
        <Route exact path="/sdf" component={MainContainer}></Route>
      </Router>
    );
  }
}

export default App;