import React, { Component } from 'react';
import { Button, Modal, Col, Form } from 'react-bootstrap'

class ModalTarea extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            fecha_tarea: null,
            descripción_tarea: null,
            titulo_tarea: null,
            duracion_tarea: null
            //fecha_inicial: null,
            //fecha_final: null
        }

    };

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    submitTarea() {

    }

    render() {
        return (
            <Col md={3}>
                <Button bsStyle='info' onClick={this.handleShow}>
                    Crear tarea
                </Button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Nueva tarea</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form inline onSubmit={this.submitTarea}>
                            <div className='row'>
                                <Col md={6}>
                                    <label htmlFor=''>Titulo de la tarea</label>
                                    <input type='text' name='' placeholder='Título' onChange={event => this.setState({ titulo_tarea: event.target.value })} />
                                </Col>

                                <Col mdOffset={6}>
                                    <label htmlFor=''>Descripción</label>
                                    <br/>
                                    <textarea name='' id='' placeholder='Descripción' onChange={event => this.setState({ descripción_tarea: event.target.value })}></textarea>
                                </Col>
                            </div>
                            <div className='row'>
                                <Col md={3}>
                                    <label htmlFor=''>Duración</label>
                                    <br/>
                                    <input type='number' placeholder='Duración' onChange={event => this.setState({ duracion_tarea: event.target.value })} />
                                </Col>

                                <Col mdOffset={6}>
                                    <label htmlFor=''>Fecha </label>
                                    <br/>
                                    <input type='date' onChange={event => this.setState({ fecha_tarea: event.target.value })} />
                                </Col>
                            </div>
                            <br/>
                            <Button type='submit' bsStyle='primary'>Aceptar</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </Col>
        );
    }
}

export default ModalTarea; 