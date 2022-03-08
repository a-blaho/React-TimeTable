import React, { Component } from 'react';
import Daytile from './Daytile';
import Tile from './Tile';

class Row extends Component {
    state = { 
        tiles: [],
        sizes: [1,1,1,1,1,1,1,1,1,1,1,1,1]
     } 

    getSizesCount(sizes) {
        let length = 0
        sizes.forEach(s => {
            length += s
        })
        return length
    }
    setSizes(index, value) {
        let s = this.state.sizes.slice()
        s[index] = Number(value)
        let length = this.getSizesCount(s)
        //we need to remove one or more tiles
        while(length > 13) {
            s.splice(index + 1, 1)
            length = this.getSizesCount(s)
        }
        //we need to add one tile
        if(length < 13) {
            s.splice(index + 1, 0, 1)
            length = this.getSizesCount(s)
            //widen that tile until we have enough
            while(length < 13) {
                s[index + 1] += 1
                length = this.getSizesCount(s)
            }
        }
        this.setState({
            sizes: s.slice(),
        }, () => {
            this.setState({tiles: []})
            let t = []
            for (let i = 0; i < this.state.sizes.length; i++) {
                t.push(<Tile key={i} id={i} size={this.state.sizes[i]} setSizes={(index, value) => {this.setSizes(index, value)}}/>)
            }
            this.setState({tiles: t})
        })
        
    }
    render() {
        if(this.state.tiles.length === 0) {
            for (let i = 0; i < this.state.sizes.length; i++) {
                this.state.tiles.push(<Tile key={i} id={i} size={this.state.sizes[i]} setSizes={(index, value) => {this.setSizes(index, value)}}/>)
            }
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