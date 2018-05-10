import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import { Panel, Grid, Row, Col, Modal, Button } from 'react-bootstrap';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import HTML5Backend from 'react-dnd-html5-backend';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import * as calendarAction from '../actions/CalendarAction';
import 'react-select/dist/react-select.css';

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
        this.handleTaskShow = this.handleTaskShow.bind(this);
        this.handleTaskClose = this.handleTaskClose.bind(this);
        this.handleWorkerShow = this.handleWorkerShow.bind(this);
        this.handleWorkerClose = this.handleWorkerClose.bind(this);
        this.handleTaskChange = this.handleTaskChange.bind(this);
        this.handleSelectChange=this.handleSelectChange.bind(this);

        this.state = {
            events: [],
            newEvent: {
                id: '',
                start: '',
                end: '',
                title: '',
            },
            showTaskModal: false,
            showWorkerModal:false,
            selectedOption:'',
        };

    }
    eventStyleGetter=(event, start, end, isSelected) => {
        console.log(event);
        var backgroundColor = '#' + event.hexColor;
        var style = {
            backgroundColor: backgroundColor,
            borderRadius: '0px',
            opacity: 0.8,
            color: 'black',
            border: '0px',
            display: 'block'
        };
        return {
            style: style
        };
    }

    componentWillReceiveProps(props) {
        console.log("will recieve props", props)
        this.setState({ events: props.events });
        
    }

    handleTaskClose() {
        this.setState({ showTaskModal: false });
    }

    handleTaskShow() {
        this.setState({ showTaskModal: true });
    }

    handleWorkerShow(){
        this.setState({showWorkerModal:true});
    }

    handleWorkerClose(){
        this.setState({showWorkerModal:false});
    }

    

    moveEvent({ event, start, end }) {
        const updatedEvent = { ...event, start, end }
        this.props.changeEvent(updatedEvent);
        console.log('eventos guardados', updatedEvent);

        alert(`${updatedEvent.title} was dropped onto ${event.start}`)
    }

    resizeEvent = (resizeType, { event, start, end }) => {
        const  updatedEvent  = {...event, start, end};
        this.props.changeEvent(updatedEvent);
        console.log('resize event ', this.props.events)
    }

    handleTaskChange = (name, value) => {
        if (name === "start" || name === "end") {
            value = new Date(value);
        }
        this.setState({
            newEvent: {
                ...this.state.newEvent, [name]: value
            }
        })
        console.log('estado modal ', this.state.newEvent);
    }

    handleWorkerChange=(name, value)=>{
        if (name==='startWorkerDate' || name==='endWorkerDate'){
            value=new Date(value);
        }

        this.setState({
            newEvent:{
                
            }
        })
    }

    handleSelectChange=(event)=>{
        console.log('selectChange ',event.target.value);
        this.setState({newEvent:
            {
                title:event.target.value,
                start:new Date(),
                end:moment(new Date()).add(1, 'days')
            }
        }, () =>{
            this.props.saveEvent({ ...this.state.newEvent, id: Math.random() });
        });
        console.log('EVEEEEEENTO ', this.state.newEvent)
       
        console.log('la opcion seleccionada ha sido ', JSON.stringify(this.state.selectedOption));
    }

    confirmDialog() {
        this.props.saveEvent({ ...this.state.newEvent, id: Math.random() });
        this.setState({
            newEvent: {
                id: '',
                start: '',
                end: '',
                title: ''
            }
        })
        console.log('estado final', this.state.events)
    }

    render() {
        return (
            <Grid>
                <Panel>
                    <Panel.Body>
                        <Row>
                            <Col md={3}>
                                <Button bsStyle='info' onClick={this.handleTaskShow}>
                                    Crear tarea
                                </Button>
                                <Modal show={this.state.showTaskModal} onHide={this.handleTaskClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Nueva tarea</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className='row'>
                                            <Col md={6}>
                                                <label htmlFor=''>Titulo de la tarea</label>
                                                <input type='text' name='title' placeholder='Título' onChange={(e) => { this.handleTaskChange(e.target.name, e.target.value) }} value={this.state.newEvent.title} />
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
                                                <input name='start' type='date' placeholder='Start' onChange={(e) => { this.handleTaskChange(e.target.name, e.target.value) }} value={this.state.start} />
                                            </Col>

                                            <Col mdOffset={6}>
                                                <label htmlFor=''>End date </label>
                                                <br />
                                                <input name='end' type='date' placeholder='End' onChange={(e) => { this.handleTaskChange(e.target.name, e.target.value) }} value={this.state.end} />
                                            </Col>
                                        </div>
                                        <br />
                                        <Button type='submit' bsStyle='primary' onClick={() => this.confirmDialog()}>Aceptar</Button>
                                    </Modal.Body>
                                </Modal>
                                <Button bsStyle='primary' onClick={this.handleWorkerShow}>Asignar trabajador</Button>
                                <Modal show={this.state.showWorkerModal} onHide={this.handleWorkerClose}>
                                    <Modal.Header><h3>Asignar trabajador</h3></Modal.Header>
                                    <Modal.Body>
                                        <label>Select On Call Worker</label>
                                        <select name='' value={this.state.selectedOption} className='form-control' onChange={(x)=>this.handleSelectChange(x)}>
                                            {this.props.workers.map((x)=><option value={x.dni} key={x.dni}>{x.name}</option>)}
                                        </select>
                                        <label>Start date:</label>
                                        <input name='startWorkerDate' type='date' className='form-control'/>
                                        <label>End date: </label>
                                        <input name='endWorkerDate' type='date' className='form-control'/>
                                        <Button bsStyle='primary'>Aceptar</Button>
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
                                eventPropGetter={this.eventStyleGetter}
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
        events: state.calendar.events,
        workers: state.workers.workers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveEvent: events => dispatch(calendarAction.calendarEvents(events)),
        changeEvent: events => dispatch(calendarAction.updateEvent(events))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DragDropContext(HTML5Backend)(MyCalendar));