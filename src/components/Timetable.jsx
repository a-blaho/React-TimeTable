import React, { Component } from "react";
import Row from "./Row";
import Timetile from "./Timetile";

class Timetable extends Component {
  state = {
    times: [],
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    rows: [],
  };

  render() {
    this.state.times.push(<Timetile key="0" time="" />);
    for (let i = 8; i < 21; i++) {
      let timestamp = `${i}:00 - ${i}:50`;
      this.state.times.push(<Timetile key={i} time={timestamp} />);
    }
    for (let i = 0; i < this.state.days.length; i++) {
      this.state.rows.push(<Row key={i} day={this.state.days[i]} />);
    }

    return (
        <div className="timetable">
          {this.state.times}
          {this.state.rows}
        </div>
    );
  }
}

export default Timetable;
