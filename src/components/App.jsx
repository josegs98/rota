import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import { Panel, Grid, Row, Col, Button, Modal } from 'react-bootstrap';


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
                    show: false
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
        return (
            <Grid>
                <Panel>
                    <Panel.Heading>
                        <h3 className="text-center">ROTA</h3>
                    </Panel.Heading>
                    <Panel.Body>
                        <Row>
                            <Button bsStyle="info" onClick={this.handleShow}>
                                Modal
                            </Button>
                            <Modal show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <h4>Automatizar</h4>
                                    <label htmlFor="">Fecha de entrada: </label>&nbsp;<input type="date"/>
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