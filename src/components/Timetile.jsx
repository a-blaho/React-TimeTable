import React, { Component } from "react";

class Time extends Component {
  state = {
    p: "block",
    input: "none",
    time: localStorage.getItem(this.props.id) ? localStorage.getItem(this.props.id) : this.props.time,
  };

  render() {
    return (
      <div className="timetile">
        <input
          type="text"
          style={{ width: "100%", display: this.state.input}}
          id={"input-" + this.props.id}
          className={"timetile-input"}
        />
        <p className={"timetile-p"} id={this.props.id} style={{display: this.state.p }}>{this.state.time}</p>
      </div>
    );
  }
}

export default Time;
