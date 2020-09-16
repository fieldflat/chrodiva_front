import React from "react";
import Navbar from "./Navbar"
import Footer from "./Footer"

class Layout extends React.Component {
  render() {
    return (
      <div>
        <div className="App">
          <Navbar />
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
