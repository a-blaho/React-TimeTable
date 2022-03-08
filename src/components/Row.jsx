import React, { Component } from 'react';
import Daytile from './Daytile';
import Tile from './Tile';

class Row extends Component {
    state = { 
        tiles: []
     } 
    handleClick() {
     console.log('click')   
    }
    render() {
        for (let i = 0; i < 13; i++) {
            let color = this.props.color ? this.props.color[i] : 'white'
            this.state.tiles.push(<Tile key={i} color={color} onClick={() => {this.handleClick()}}/>)
        }
        return (
            <React.Fragment>
                <Daytile day={this.props.day}/>
                {this.state.tiles}
            </React.Fragment>
        );
    }
}
 
export default Row;