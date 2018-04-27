import React, {Component} from 'react';
import {Modal, Form} from 'react-bootstrap';

class ModalHoras extends Component{

    constructor(props, context){
        super(props, context);
        console.log(this.props.show);
        this.handleShow=this.handleShow.bind(this);
        this.handleClose=this.handleClose.bind(this);

        this.state={
            showChild:this.props.show
        }
        console.log(this.state.showChild);

    }

    componentWillReceiveProps(newProps) {
        if(this.state.show != newProps.show){
            this.setState({showChild: newProps.show});
        }
        console.log('holas'+this.state.showChild);
    }

    handleClose() {
        this.props.changeModalState();
    }

    handleShow() {
        this.setState({ showChild: true });
    }

    render(){
        return (
            <Modal show={this.state.showChild} onHide={this.handleClose}>
                <Modal.Header>
                    <Modal.Title>Cambiar multiplicador horario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    x<input type='number' />
                </Modal.Body>
            </Modal>
        );
    }
}

export default ModalHoras;