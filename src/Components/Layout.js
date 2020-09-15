import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar"
import Footer from "./Footer"

class Layout extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
