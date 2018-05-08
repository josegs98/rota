import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import { connect } from 'react-redux';

import { DragDropContext } from 'react-dnd';
import { Panel, Grid, Row } from 'react-bootstrap';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import HTML5Backend from 'react-dnd-html5-backend';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import * as calendarAction from '../actions/CalendarAction';
import ModalTarea from './ModalTarea';

Calendar.setLocalizer(Calendar.momentLocalizer(moment));
const DragAndDropCalendar = withDragAndDrop(Calendar);

var calendarStyle = {
    height: '100vh',
    margin: '10px'
}

class MyCalendar extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            events: [
                {
                    start: new Date(),
                    end: new Date(moment().add(1, 'days')),
                    title: 'Some title',
                }
            ]
        };
        this.moveEvent=this.moveEvent.bind(this);
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
    
        alert(`${event.title} was resized to ${start}-${end}`)
    }


    render() {
        return (
            <Grid>
                <Panel>
                    <Panel.Body>
                        <Row>
                            <ModalTarea />
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
        saveEvent:events=>dispatch(calendarAction.calendarEvents(events))
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (DragDropContext (HTML5Backend)(MyCalendar));