import React from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }

  onChangetext(e) {
    this.setState({ user: e.target.value });
  }

  hundleSubmit = () => {
    console.log(this.state.user);
    this.props.createUser(this.state.user);
    this.setState({ user: "" });
  };

  render() {
    return (
      <div>
        <form>
          <FormGroup controlId="formBasicText">
            <FormControl
              type="text"
              value={this.state.user}
              placeholder="Enter text"
              onChange={e => this.onChangetext(e)}
            />
          </FormGroup>
        </form>
        <Button type="submit" onClick={this.hundleSubmit}>
          つぶやく
        </Button>
      </div>
    );
  }
}

export default FormContainer;
