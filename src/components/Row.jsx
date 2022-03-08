import React, { Component } from "react";
import Daytile from "./Daytile";
import Tile from "./Tile";

class Row extends Component {
  state = {
    tiles: this.tilesInit(),
  };

  tilesInit() {
    let tiles = [];
    if(localStorage.getItem(this.props.day)) {
        tiles = JSON.parse(localStorage.getItem(this.props.day))
    }
    else {
        for (let i = 0; i < 13; i++) {
            tiles.push({
                size: 1,
                fontColor: "#000000",
                backgroundColor: "#FFFFFF",
                subject: "",
                teacher: "",
                classroom: "",
                maxSize: 13 - i,
            });
        }
        localStorage.setItem(this.props.day, JSON.stringify(tiles))
    }
    return tiles;
  }

  //adds all the sizes together, they should be equal to 13
  getSizesCount(tiles) {
    let length = 0;
    tiles.forEach((t) => {
      length += t.size;
    });
    return length;
  }

  //fixes the max sizes after the tiles have been edited
  fixMaxSizes(tiles) {
    for (let i = 0; i < tiles.length; i++) {
      let maxSize = 0;
      for (let j = i; j < tiles.length; j++) {
        maxSize += tiles[j].size;
      }
      tiles[i].maxSize = maxSize;
    }
    return tiles;
  }

  editTile(index, newTile) {
    let t = this.state.tiles.slice();
    t[index] = newTile;
    let length = this.getSizesCount(t);
    //a tile has been enlarged
    while (length > 13) {
      let i = 1;
      //if there is a 1 wide tile next to it, absorb it
      if (t[index + i].size === 1) {
        t.splice(index + 1, 1);
      }
      //if there is a wider tile next to it, make it shorter
      else {
        t[index + 1].size -= 1;
      }
      //check the length again
      length = this.getSizesCount(t);
    }
    //a tile has been shortened
    while (length < 13) {
      //add another 1 wide tile
      t.splice(index + 1, 0, {
        size: 1,
        fontColor: "#000000",
        backgroundColor: "#FFFFFF",
        subject: "",
        teacher: "",
        classroom: "",
        maxSize: 1,
      });
      //check the length again
      length = this.getSizesCount(t);
    }
    t = this.fixMaxSizes(t);
    localStorage.setItem(this.props.day, JSON.stringify(t))
    this.setState({ tiles: t });
  }

  resetTile(index) {
    let t = this.state.tiles.slice();
    t[index] = {
      subject: "",
      teacher: "",
      classroom: "",
      backgroundColor: "#FFFFFF",
      fontColor: "#000000",
      size: 1,
      maxSize: 1,
    };
    let length = this.getSizesCount(t);
    //a tile has been shortened
    while (length < 13) {
      t.splice(index + 1, 0, {
        size: 1,
        fontColor: "#000000",
        backgroundColor: "#FFFFFF",
        subject: "",
        teacher: "",
        classroom: "",
        maxSize: 1,
      });
      length = this.getSizesCount(t);
    }
    t = this.fixMaxSizes(t);
    localStorage.setItem(this.props.day, JSON.stringify(t))
    this.setState({
      tiles: t.slice(),
    });
  }

  render() {
    return (
      <React.Fragment>
        <Daytile day={this.props.day} />
        {this.state.tiles.map((t, index) => {
          return (
            <Tile
              key={index}
              id={index}
              size={t.size}
              setSizes={(index, value) => {
                this.setSizes(index, value);
              }}
              fontColor={t.fontColor}
              backgroundColor={t.backgroundColor}
              subject={t.subject}
              teacher={t.teacher}
              classroom={t.classroom}
              editTile={(index, newTile) => this.editTile(index, newTile)}
              resetTile={(index) => this.resetTile(index)}
              maxSize={t.maxSize}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export default Row;
