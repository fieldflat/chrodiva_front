import React from "react";
import update from "react-addons-update";
import container from "../css/container.module.css";
import UsersContainer from "./UsersContainer";
import FormContainer from "./FormContainer";

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

    axios
      .get("http://localhost:3001/users")
      .then(results => {
        console.log(results);
        this.setState({ users: results.data });
      })
      .catch(data => {
        console.log(data);
      });
  }

  createUser = user => {
    const axios = require("axios");
    axios
      .post("http://localhost:3001/users", { uid: user })
      .then(response => {
        const newData = update(this.state.users, { $push: [response.data] });
        this.setState({ users: newData });
      })
      .catch(data => {
        console.log(data);
      });
  };

  render() {
    return (
      <div className={container.container}>
        <FormContainer createUser={this.createUser} />
        <UsersContainer userData={this.state.users} />
      </div>
    );
  }
}

export default MainContainer;
