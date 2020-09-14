import React from "react";

class ViewUser extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.data.uid}</span>
      </div>
    );
  }
}

export default ViewUser;
