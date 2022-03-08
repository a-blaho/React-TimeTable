import React, { Component } from "react";

class Daytile extends Component {
  state = {};
  render() {
    return (
      <div className="daytile">
        <p>{this.props.day}</p>
      </div>
    );
  }
}

export default Daytile;
