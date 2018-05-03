import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';

class ModalHoras extends Component{

    constructor(props, context){
        super(props, context);
        this.handleShow=this.handleShow.bind(this);
        this.handleClose=this.handleClose.bind(this);

        this.state={
            showChild:this.props.show
        }
    }

    componentWillReceiveProps(newProps) {
        if(this.state.show !== newProps.show){
            this.setState({showChild: newProps.show});
        }
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