import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import { Panel, Grid, Row, Col, Button, Modal, FormGroup } from 'react-bootstrap';


import "react-big-calendar/lib/css/react-big-calendar.css";

Calendar.setLocalizer(Calendar.momentLocalizer(moment));

class App extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            events: [
                {
                    start: new Date(),
                    end: new Date(moment().add(1, "days")),
                    title: "Some title",
                    show: false,
                    fecha_inicial: null,
                    fecha_final: null
                }
            ]
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        console.log("FECHA INICIAL: ", this.state.fecha_inicial, "FECHA FINAL: ", this.state.fecha_final);
        return (
            <Grid>
                <Panel>
                    <Panel.Heading>
                        <h3 className="text-center">ROTA</h3>
                    </Panel.Heading>
                    <Panel.Body>
                        <Row>
                            {/*<Button bsStyle="info" onClick={this.handleShow}>
                                Modal
                            </Button>
                            <Modal show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <h4>Planear horario</h4>
                                    <label htmlFor="">Fecha inicial: </label>&nbsp;<input type="date" onChange={event=>this.setState({fecha_inicial:event.target.value})}/>
                                    &nbsp;
                                    <label htmlFor="">Fecha final: </label>&nbsp;<input type="date" onChange={event=>this.setState({fecha_final:event.target.value})}/>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button bsStyle="primary" onClick={this.handleClose}>Aceptar</Button>
                                </Modal.Footer>
                            </Modal>*/}
                            <Button bsStyle="info" onClick={this.handleShow}>
                                Crear tarea
                            </Button>
                            <Modal show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Nueva tarea</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <form>
                                        <FormGroup>
                                            <label htmlFor="">Titulo de la tarea</label>
                                            <input type="text" name="" placeholder="Titulo"/>
                                        </FormGroup>
                                        <FormGroup>
                                            <label htmlFor="">Descripción tarea:</label>
                                            <textarea name="" id="" ></textarea>
                                        </FormGroup>
                                        <FormGroup>
                                            <label htmlFor="">Duración</label>
                                            <input type="number" placeholder="Duración"/>
                                        </FormGroup>
                                    </form>
                                </Modal.Body>
                            </Modal>
                        </Row>
                        <Row>
                            <Calendar
                                defaultDate={new Date()}
                                defaultView="month"
                                events={this.state.events}
                                style={{ height: "100vh" }}
                            />
                        </Row>
                    </Panel.Body>

                </Panel>
            </Grid>

        );
    }
}

export default App;