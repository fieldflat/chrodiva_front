import React, { Component } from 'react';
import Layout from './Components/Basis/Layout'
import MainContainer from './Components/UserExample/MainContainer'
import TopContainer from './Components/Top/TopContainer'
import LoginContainer from './Components/Login/LoginContainer'
import SignupContainer from './Components/Login/SignupContainer'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route exact path="/" component={TopContainer}></Route>
          <Route exact path="/login" component={LoginContainer}></Route>
          <Route exact path="/signup" component={SignupContainer}></Route>
          <Route exact path="/users" component={MainContainer}></Route>
        </Layout>
      </Router>
    );
  }
}

export default App;