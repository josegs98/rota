import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import { Panel, Grid, Row, Col, Modal, Button } from 'react-bootstrap';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import HTML5Backend from 'react-dnd-html5-backend';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import * as calendarAction from '../actions/CalendarAction';

Calendar.setLocalizer(Calendar.momentLocalizer(moment));
const DragAndDropCalendar = withDragAndDrop(Calendar);

var calendarStyle = {
    height: '100vh',
    margin: '10px'
}

class MyCalendar extends Component {

    
    constructor(props, context) {
        super(props, context);

        this.moveEvent = this.moveEvent.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeDatePicker=this.handleChangeDatePicker.bind(this);
        this.state = {
            events: [
                
            ],
            newEvent: {
                start: '',
                end: '',
                title: '',
            },
            show: false
        };

    }

    componentWillReceiveProps(props){
        console.log("will recieve props", props.events)
        this.setState({events: props.events});
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    moveEvent({ event, start, end }) {
        const { events } = this.state
        
        const idx = events.indexOf(event)
        const updatedEvent = { ...event, start, end }

        const nextEvents = [...events]
        nextEvents.splice(idx, 1, updatedEvent)
        
        this.setState({
            events: nextEvents,
        })
        
        this.props.saveEvent(this.state.events);
        console.log('eventos guardados', this.props.events);

        alert(`${event.title} was dropped onto ${event.start}`)
    }

    resizeEvent = (resizeType, { event, start, end }) => {
        const { events } = this.state

        const nextEvents = events.map(existingEvent => {
            return existingEvent.id == event.id
                ? { ...existingEvent, start, end }
                : existingEvent
        })

        this.setState({
            events: nextEvents,
        })
        this.props.saveEvent(this.state.events);
        console.log('resize event ', this.props.events)

        alert(`${event.title} was resized to ${start}-${end}`)
    }

    handleChangeDatePicker(date) {
        this.setState({
          startDate: date
        });
    }

    handleChange = (name, value) => {
        this.setState({
            newEvent: {
                ...this.state.newEvent, [name]: value
            }
        })
        console.log('estado modal ', this.state.newEvent);
    }

    confirmDialog(){
        this.props.saveEvent(this.state.newEvent);
        this.setState({newEvent:{ start: '',
        end: '',
        title: ''}})


        console.log('estado final', this.state.events)
    }

    render() {
        return (
            <Grid>
                <Panel>
                    <Panel.Body>
                        <Row>
                            <Col md={3}>
                                <Button bsStyle='info' onClick={this.handleShow}>
                                    Crear tarea
                                </Button>
                                <Modal show={this.state.show} onHide={this.handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Nueva tarea</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>

                                        <div className='row'>
                                            <Col md={6}>
                                                <label htmlFor=''>Titulo de la tarea</label>
                                                <input type='text' name='title' placeholder='Título' onChange={(e) => { this.handleChange(e.target.name, e.target.value) }} value={this.state.newEvent.title} />
                                            </Col>

                                            <Col mdOffset={6}>
                                                <label htmlFor=''>Descripción</label>
                                                <br />
                                                <textarea name='' id='' placeholder='Descripción' ></textarea>
                                            </Col>
                                        </div>
                                        <div className='row'>
                                            <Col md={3}>
                                                <label htmlFor=''>Start date</label>
                                                <br />
                                                <input name='start' type='date' placeholder='Start' onChange={(e) => { this.handleChange(e.target.name, e.target.value) }} value={this.state.start} />
                                            </Col>

                                            <Col mdOffset={6}>
                                                <label htmlFor=''>End date </label>
                                                <br />
                                                <input name='end' type='date' placeholder='End' onChange={(e) => { this.handleChange(e.target.name, e.target.value) }} value={this.state.end} />
                                            </Col>
                                        </div>
                                        <br />
                                        <Button type='submit' bsStyle='primary' onClick={()=>this.confirmDialog()}>Aceptar</Button>

                                    </Modal.Body>
                                </Modal>
                            </Col>
                        </Row>
                        <Row>
                            <DragAndDropCalendar
                                selectable
                                events={this.state.events}
                                defaultDate={new Date()}
                                onEventDrop={this.moveEvent}
                                onEventResize={this.resizeEvent}
                                defaultView='month'
                                style={calendarStyle}
                            />
                        </Row>
                    </Panel.Body>

                </Panel>
            </Grid>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('calendar state ', state)
    return {
        events: state.calendar.events
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveEvent: events => dispatch(calendarAction.calendarEvents(events))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DragDropContext(HTML5Backend)(MyCalendar));