import React, { Component } from "react";
import Row from "./Row";
import Timetile from "./Timetile";

class Timetable extends Component {
  state = {
    times: this.timesInit(),
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    rows: [],
  };

  timesInit() {
    let times = [];
    times.push(<div key={14} className="timetile"></div>);
    for (let i = 0; i < 13; i++) {
      let timestamp = `${i + 8}:00 - ${i + 8}:50`;
      times.push(<Timetile id={"time-" + i} key={i} time={timestamp} />);
      localStorage.setItem("time-" + i, timestamp)
    }
    return times;
  }

  render() {
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
