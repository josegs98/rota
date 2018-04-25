import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import { Panel, Grid, Row } from 'react-bootstrap';
import "react-big-calendar/lib/css/react-big-calendar.css";

import ModalTarea from './ModalTarea';

Calendar.setLocalizer(Calendar.momentLocalizer(moment));

var calendarStyle = {
    height: "100vh",
    margin: "10px"
}

class App extends Component {
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
                    fecha_tarea: null,
                    descripción_tarea: null,
                    titulo_tarea: null,
                    duracion_tarea: null
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

    render() {
        return (
            <div>
                <Grid>
                    <Panel>
                        <Panel.Body>
                            <Row>
                                <ModalTarea />
                            </Row>
                            <Row>
                                <Calendar
                                    defaultDate={new Date()}
                                    defaultView="month"
                                    events={this.state.events}
                                    style={calendarStyle}
                                />
                            </Row>
                        </Panel.Body>

                    </Panel>
                </Grid>
            </div>

        );
    }
}

export default App;