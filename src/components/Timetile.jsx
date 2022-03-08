import React, { Component } from 'react';

class Time extends Component {
    state = { } 
    render() { 
        return (
            <div className='timetile'>
                <p>{this.props.time}</p>
            </div>
        );
    }
}

export default Time;