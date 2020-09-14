import React from "react";
import UsersContainer from "./UsersContainer";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    const axios = require("axios");
    // axios.defaults.baseURL = "http://localhost:3000";
    // axios.defaults.headers.post["Content-Type"] =
    //   "application/json;charset=utf-8";
    // axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

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
    return (
      <div className="app-main">
        <UsersContainer userData={this.state.users} />
        sdf
      </div>
    );
  }
}

export default MainContainer;
