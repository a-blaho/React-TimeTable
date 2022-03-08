import React, { Component } from "react";
import Row from "./Row";
import Timetile from "./Timetile";

class Timetable extends Component {
  constructor() {
    super();
    this.state = {
      times: [],
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      rows: [],
    };
  }

  render() {
    this.state.times.push(<Timetile key="0" time="" />);
    for (let i = 8; i < 21; i++) {
      let timestamp = `${i}:00 - ${i}:50`;
      this.state.times.push(<Timetile key={i} time={timestamp} />);
    }

    this.state.rows.push(<Row key={0} day={this.state.days[0]} />);
    this.state.rows.push(<Row key={1} day={this.state.days[1]} />);
    this.state.rows.push(<Row key={2} day={this.state.days[2]} />);
    this.state.rows.push(<Row key={3} day={this.state.days[3]} />);
    this.state.rows.push(<Row key={4} day={this.state.days[4]} />);

    return (
      <div className="timetable">
        {this.state.times}
        {this.state.rows}
      </div>
    );
  }
}

export default Timetable;
