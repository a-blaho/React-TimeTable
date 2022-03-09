import React, { Component } from "react";
import ReactModal from "react-modal";

class Tile extends Component {
  state = {
    showModal: false,
  };

  //gets values from inputs and calls a function from Row
  editTile() {
    let newTile = {
      subject: document.querySelector("#subject").value,
      teacher: document.querySelector("#teacher").value,
      classroom: document.querySelector("#classroom").value,
      fontColor: document.querySelector("#fontColor").value,
      backgroundColor: document.querySelector("#backgroundColor").value,
      size: Number(document.querySelector("#size").value),
    };
    let size = Number(document.querySelector("#size").value) 
    if(size > this.props.maxSize || size < 1) {
        document.querySelector('#small').style.visibility = "visible"
        return
    }
    this.props.editTile(this.props.id, newTile);
    this.handleModal();
  }

  resetTile() {
    this.props.resetTile(this.props.id);
    this.handleModal();
  }

  //opens and closes the modal
  handleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    //needed for accesibility
    ReactModal.setAppElement("#root");
    return (
      <React.Fragment>
        <div
          onClick={() => {
            this.handleModal();
          }}
          className="tile"
          style={{
            width: "calc((100% / 14) * " + this.props.size + " + 1px)",
            backgroundColor: this.props.backgroundColor,
            color: this.props.fontColor,
          }}
        >
          <p style={{}}>
            {this.props.subject}
            
            {(this.props.subject !== "") && (this.props.teacher !== "") ? <br /> : ""}
            
            {this.props.teacher}
            
            {((this.props.teacher !== "") || (this.props.subject !== "")) && (this.props.classroom !== "") ? <br /> : ""}
            
            {this.props.classroom}
          </p>
        </div>
        <ReactModal isOpen={this.state.showModal} className={"reactmodal"}>
          <div className="container">
            <br />
            <h4>Edit tile</h4>
            <hr />
            <div className="form-floating mb-1">
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder="subject"
                defaultValue={this.props.subject}
              />
              <label htmlFor="subject">Subject</label>
            </div>
            <div className="form-floating mb-1">
              <input
                type="text"
                className="form-control"
                id="teacher"
                placeholder="teacher"
                defaultValue={this.props.teacher}
              />
              <label htmlFor="teacher">Teacher</label>
            </div>
            <div className="form-floating mb-1">
              <input
                type="text"
                className="form-control"
                id="classroom"
                placeholder="classroom"
                defaultValue={this.props.classroom}
              />
              <label htmlFor="classroom">Classroom</label>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="fontColor">Font color: </label>
                <br />
                <input
                  type="color"
                  id="fontColor"
                  defaultValue={this.props.fontColor}
                />
              </div>
              <div className="col">
                <label htmlFor="backgroundColor">Background color: </label>
                <br />
                <input
                  type="color"
                  id="backgroundColor"
                  defaultValue={this.props.backgroundColor}
                />
              </div>
            </div>
            <label htmlFor="size">Tile size</label>
            <input
              type="number"
              defaultValue={this.props.size}
              id="size"
              className="form-control"
              min={1}
              max={this.props.maxSize}
            />
            <small id="small" style={{color: "red", visibility: "hidden"}}>Invalid tile size</small>
            <br />
            <button
              className="btn btn-danger m-1"
              onClick={() => this.handleModal()}
            >
              Close
            </button>
            <button
              className="btn btn-primary m-1"
              onClick={() => this.editTile()}
              style={{ float: "right" }}
            >
              Save
            </button>
            <button
              className="btn btn-warning m-1"
              onClick={() => this.resetTile()}
              style={{ float: "right" }}
            >
              Reset
            </button>
          </div>
        </ReactModal>
      </React.Fragment>
    );
  }
}

export default Tile;
