import React from "react";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    const axios = require("axios");
    axios.get("http://localhost:3001/users")
      .then(results => {
        console.log(results);
        this.setState({ users: results.data });
      })
      .catch(data => {
        console.log(data);
      });
  }

  render() {
    return <div className="app-main"></div>;
  }
}

export default MainContainer;
