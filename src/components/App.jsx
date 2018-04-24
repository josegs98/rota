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
                    fecha_tarea:null,
                    descripción_tarea:null,
                    titulo_tarea:null,
                    duracion_tarea:null
                    //fecha_inicial: null,
                    //fecha_final: null
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

    tarea(){
        
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
                                    <form onSubmit>
                                        <FormGroup>
                                            <label htmlFor="">Titulo de la tarea</label>
                                            <br/>
                                            <input type="text" name="" placeholder="Título" onChange={event=>this.setState({titulo_tarea:event.target.value})}/>
                                        </FormGroup>
                                        <FormGroup>
                                            <label htmlFor="" style={{verticalAlign:'middle'}}>Descripción tarea:</label>
                                            <br/>
                                            <textarea name="" id="" placeholder="Descripción" onChange={event=>this.setState({descripción_tarea:event.target.value})}></textarea>
                                        </FormGroup>
                                        <FormGroup>
                                            <label htmlFor="">Duración</label>
                                            <br/>
                                            <input type="number" placeholder="Duración" onChange={event=>this.setState({duracion_tarea:event.target.value})}/>
                                        </FormGroup>
                                        <FormGroup>
                                            <label htmlFor="">Fecha </label>
                                            <br/>
                                            <input type="date" onChange={event=>this.setState({fecha_tarea:event.target.value})}/>
                                        </FormGroup>
                                        <Button type="submit" bsStyle="primary">Aceptar</Button>
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