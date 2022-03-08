import React, { Component } from 'react'
import ReactModal from 'react-modal'

class Tile extends Component {
    state = {
        fontColor: '#000000',
        backgroundColor: '#FFFFFF',
        subject: '',
        teacher: '',
        classroom: '',
        showModal: false
    }

    editTile() {
        this.setState({
            subject: document.querySelector('#subject').value, 
            teacher: document.querySelector('#teacher').value,
            classroom: document.querySelector('#classroom').value,
            fontColor: document.querySelector('#fontColor').value,
            backgroundColor: document.querySelector('#backgroundColor').value
        })
        
        this.props.setSizes(this.props.id, document.querySelector('#size').value)
        this.handleModal()
    }

    resetTile() {
        this.setState({
            subject: '',
            teacher: '',
            classroom: '',
            backgroundColor: '#FFFFFF',
            fontColor: '#000000'
        })
        this.handleModal()
    }

    handleModal() {
        this.setState({showModal: !this.state.showModal})
    }

    render() { 
        ReactModal.setAppElement('#root');
        return (
            <React.Fragment>
                <div onClick={() => {this.handleModal()}} className='tile' style={{
                    width: 'calc((100% / 14) * ' + this.props.size + ' + 1px)', 
                    backgroundColor: this.state.backgroundColor, 
                    color: this.state.fontColor
                }}>
                    <p>{this.state.subject}<br/>
                    {this.state.teacher}<br/>
                    {this.state.classroom}</p>
                </div>
                <ReactModal isOpen={this.state.showModal} className={'reactmodal'}>
                    <div className='container'>
                        <br />
                        <h4>Edit tile</h4>
                        <hr />
                        <div className="form-floating mb-1">
                            <input type="text" className="form-control" id="subject" placeholder="subject" defaultValue={this.state.subject}/>
                            <label htmlFor="subject">Subject</label>
                        </div>
                        <div className="form-floating mb-1">
                            <input type="text" className="form-control" id="teacher" placeholder="teacher" defaultValue={this.state.teacher}/>
                            <label htmlFor="teacher">Teacher</label>
                        </div>
                        <div className="form-floating mb-1">
                            <input type="text" className="form-control" id="classroom" placeholder="classroom" defaultValue={this.state.classroom}/>
                            <label htmlFor="classroom">Classroom</label>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label htmlFor="fontColor">Font color: </label>
                                <br />
                                <input type="color" id="fontColor" defaultValue={this.state.fontColor}/>
                            </div>
                            <div className='col'>
                                <label htmlFor="backgroundColor">Background color: </label>
                                <br />
                                <input type="color" id="backgroundColor" defaultValue={this.state.backgroundColor}/>
                            </div>
                            </div>
                        <label htmlFor="size">Tile size</label>
                        <input type='number' defaultValue={this.props.size} id='size' className='form-control' min={1} max={13}/>
                        <br />
                        <button className='btn btn-danger m-1' onClick={() => this.handleModal()}>Close</button>
                        <button className='btn btn-primary m-1' onClick={() => {this.editTile()}} style={{float: 'right'}}>Save</button>
                        <button className='btn btn-warning m-1' onClick={() => this.resetTile()} style={{float: 'right'}}>Reset</button>
                    </div>
                </ReactModal>
            </React.Fragment>
        );
    }
}


export default Tile