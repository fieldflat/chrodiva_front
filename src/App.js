import React, { Component } from 'react';
import Layout from './Components/Layout'
import MainContainer from './Components/MainContainer'
import TopContainer from './Components/TopContainer'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route exact path="/" component={TopContainer}></Route>
          <Route exact path="/users" component={MainContainer}></Route>
          <Route exact path="/sdf"></Route>
        </Layout>
      </Router>
    );
  }
}

export default App;