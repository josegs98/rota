import React, { Component } from 'react';

import Calendar from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import * as calendarAction from '../actions/CalendarAction';
import { DragDropContext } from 'react-dnd';

import { connect } from 'react-redux';
import moment from 'moment';
import HTML5Backend from 'react-dnd-html5-backend';

import 'react-select/dist/react-select.css';
import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { DatePicker, Select } from 'antd';
import { Panel, Grid, Row, Col, Modal, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';


Calendar.setLocalizer(Calendar.momentLocalizer(moment));
const DragAndDropCalendar = withDragAndDrop(Calendar);
const Option = Select.Option;

var calendarStyle = {
    height: '100vh',
    margin: '10px'
}



class MyCalendar extends Component {

    styledEvents = (event, start, end, isSelected) => {
        let newStyle = {
            backgroundColor: "lightgrey",
            color: 'black',
            borderRadius: "0px",
            border: "none"
        };

        if (event.type === 'onCall') {
            newStyle.backgroundColor = "lightcoral";
        } else {
            newStyle.backgroundColor = "lightblue";
        }

        return {
            className: "",
            style: newStyle
        };
    }

    constructor(props, context) {
        super(props, context);

        //OTHERS
        this.moveEvent = this.moveEvent.bind(this);

        //TASK
        this.handleTaskShow = this.handleTaskShow.bind(this);
        this.handleTaskClose = this.handleTaskClose.bind(this);
        this.handleTaskChange = this.handleTaskChange.bind(this);
        this.onChangeTaskStartDate = this.onChangeTaskStartDate.bind(this);
        this.onChangeTaskEndDate = this.onChangeTaskEndDate.bind(this);

        //WORKER
        this.handleWorkerShow = this.handleWorkerShow.bind(this);
        this.handleWorkerClose = this.handleWorkerClose.bind(this);
        this.handleWorkerChange = this.handleWorkerChange.bind(this);
        this.onChangeWorkerEndDate = this.onChangeWorkerEndDate.bind(this);
        this.onChangeWorkerStartDate = this.onChangeWorkerStartDate.bind(this);

        //EVENT
        this.handleModalEventShow = this.handleModalEventShow.bind(this);
        this.handleModalEventClose = this.handleModalEventClose.bind(this);
        this.handleModalEventChange=this.handleModalEventChange.bind(this); 
        this.onChangeUpdateStartDate=this.onChangeUpdateStartDate.bind(this);
        this.onChangeUpdateEndDate=this.onChangeUpdateEndDate.bind(this);

        this.state = {
            events: [],
            newEvent: {
                id: '',
                start: moment(),
                type: '',
                end: moment(),
                title: '',
                
            },
            updatedEvent:{
                id: '',
                start: moment(),
                type: '',
                end: moment(),
                title: ''
            },
            showTaskModal: false,
            showWorkerModal: false,
            showEventModal: false
        };

    }

    componentWillReceiveProps(props) {
        console.log("will recieve props", props)
        this.setState({ events: props.events });

    }

    componentDidMount() {
        this.setState({ events: this.props.events });

    }

    moveEvent({ event, start, end }) {
        const updatedEvent = { ...event, start, end }
        this.props.changeEvent(updatedEvent);
        //console.log('eventos guardados', updatedEvent);
    }

    resizeEvent = (resizeType, { event, start, end }) => {
        const updatedEvent = { ...event, start, end };
        this.props.changeEvent(updatedEvent);
    }

    /*--------------------------TASK--------------------------- */

    /* task dialog */

    handleTaskClose() {
        this.setState({ showTaskModal: false });
    }

    handleTaskShow() {
        this.setState({ showTaskModal: true });
    }

    /*---------------*/

    handleTaskChange = (name, value) => {
        this.setState({
            newEvent: {
                ...this.state.newEvent, [name]: value, type: 'task'
            }
        })
    }

    onChangeTaskStartDate(date, dateString) {

        this.setState({
            newEvent: {
                ...this.state.newEvent,
                start: new Date(date._d)
            }
        })
        console.log(this.state.newEvent);
    }

    onChangeTaskEndDate(date, dateString) {

        this.setState({
            newEvent: {
                ...this.state.newEvent,
                end: new Date(date._d)
            }
        })
        console.log(this.state.newEvent);
    }

    confirmTaskDialog() {
        this.props.saveEvent({ ...this.state.newEvent, id: Math.random() });
        this.setState({
            newEvent: {
                id: '',
                start: '',
                type: '',
                end: '',
                title: ''
            }
        })

        toast.success('Task event created successfully!!!')
        console.log('estado final', this.state.events)
    }

    /*----------------------------------------------------- */


    /*------------------------WORKER-------------------------*/

    /* worker dialog */
    handleWorkerShow() {
        this.setState({ showWorkerModal: true });
    }

    handleWorkerClose() {
        this.setState({ showWorkerModal: false });
    }
    /*-----------------*/

    onChangeWorkerStartDate(date, dateString) {

        this.setState({
            newEvent: {
                ...this.state.newEvent,
                start: new Date(date._d)
            }
        })
        console.log(this.state.newEvent);
    }

    onChangeWorkerEndDate(date, dateString) {

        this.setState({
            newEvent: {
                ...this.state.newEvent,
                end: new Date(date._d)
            }
        })
        console.log(this.state.newEvent);
    }

    handleWorkerChange = (value) => {
        var designatedWorker = null;

        this.props.workers.forEach((e) => {
            if (e.dni === value) {
                designatedWorker = e;
            }
        })

        this.setState({
            newEvent:
                {
                    ...this.state.newEvent, title: designatedWorker.name, type: 'onCall'
                }
        }/*, () =>{
            this.props.saveEvent({ ...this.state.newEvent, id: Math.random() });
        }*/);
        console.log('EVENTO TRABAJADOR: ' + this.state.newEvent);
    }

    confirmWorkerDialog() {
        this.props.saveEvent({ ...this.state.newEvent, id: Math.random() });
        this.setState({
            newEvent: {
                id: '',
                start: '',
                type: '',
                end: '',
                title: ''
            }
        })
        toast.success('Worker event created successfully!!!')
        console.log('estado worker final ', this.state.events)
    }

    /*-------------------------------------------------*/

    /*------------------------EVENT-------------------------*/
    

    handleModalEventShow(e) {
        console.log('eeeeeeeeeee=> ', e);
        this.setState({ showEventModal: true });
        this.setState({updatedEvent:{
            title:e.title,
            start:moment(e.start),
            end:moment(e.end),
            type:e.type,
            id:e.id
        }})
        
    }

    onChangeUpdateStartDate(date, dateString) {
        this.setState({
            updatedEvent: {
                ...this.state.updatedEvent,
                start: moment(new Date(date._d))
            }
        })
        console.log('UPDATED EVENT=> ', this.state.updatedEvent);
    }

    onChangeUpdateEndDate(date, dateString) {

        this.setState({
            updatedEvent: {
                ...this.state.updatedEvent,
                end: moment(new Date(date._d))
            }
        })
        console.log('UPDATED EVENT=> ', this.state.updatedEvent);
    }

    handleModalEventChange=(name, value)=>{
        this.setState({updatedEvent:{
            ...this.state.updatedEvent,
            [name]:value,
        }})
        console.log(this.state.newEvent);
    }

    handleModalEventClose() {
        this.setState({ showEventModal: false });
    }

    removeEvent(){
        //console.log('evento seleccionado => ', e)
        this.props.deleteEvent(this.state.updatedEvent.id);
        this.setState({ showEventModal: false });
        toast.error('Event deleted');
    }

    editEvent(){
        console.log('evento actualizado=> ', this.state.updatedEvent)
        this.props.changeEvent(this.state.updatedEvent);

    }

    /*-------------------------------------------------*/



    render() {
        return (
            <Grid>
                <Panel>
                    <Panel.Body>
                        <Button bsStyle='info' className='pull-left' onClick={this.handleWorkerShow}>
                            Asignar trabajador
                        </Button>

                        <Button bsStyle='info' className='pull-right' onClick={this.handleTaskShow}>
                            Crear tarea
                        </Button>

                        <Row>
                            <Col md={3}>

                                <Modal show={this.state.showTaskModal} onHide={this.handleTaskClose}>

                                    <Modal.Header closeButton>
                                        <h3>Nueva tarea</h3>
                                    </Modal.Header>

                                    <Modal.Body>

                                        <div className='row'>
                                            <Col xs={4}>
                                                <label htmlFor=''>Titulo de la tarea</label>
                                                <input className='form-control' type='text' name='title' placeholder='Título' onChange={(e) => { this.handleTaskChange(e.target.name, e.target.value) }} value={this.state.newEvent.title} />
                                            </Col>
                                        </div>

                                        <hr />

                                        <div className='row'>
                                            <Col xs={6}>
                                                <label htmlFor=''>Start date</label>
                                                <br />
                                                <DatePicker onChange={this.onChangeTaskStartDate} />
                                            </Col>
                                            <Col xs={6}>
                                                <label htmlFor=''>End date </label>
                                                <br />
                                                <DatePicker onChange={this.onChangeTaskEndDate} />
                                            </Col>
                                        </div>

                                        <br />

                                        <Button type='submit' bsStyle='primary' onClick={() => this.confirmTaskDialog()}>Aceptar</Button>

                                    </Modal.Body>
                                </Modal>

                                <Modal show={this.state.showWorkerModal} onHide={this.handleWorkerClose}>

                                    <Modal.Header>
                                        <h3>Asignar trabajador</h3>
                                    </Modal.Header>

                                    <Modal.Body>

                                        <div className='row'>
                                            <Col xs={4}>
                                                <Select
                                                    size='default'
                                                    defaultValue='Select on call worker'
                                                    name='title'
                                                    onChange={(e) => this.handleWorkerChange(e)}
                                                    style={{ width: 200 }}
                                                >
                                                    {this.props.workers.map((x) => <Option value={x.dni} key={x.dni}>{x.name}</Option>)}
                                                </Select>

                                            </Col>
                                        </div>

                                        <hr />

                                        <div className='row'>
                                            <Col xs={6}>
                                                <label>Start date:</label>
                                                <DatePicker onChange={this.onChangeWorkerStartDate} />
                                            </Col>
                                            <Col xs={6}>
                                                <label>End date: </label>&nbsp;
                                                <DatePicker onChange={this.onChangeWorkerEndDate} />
                                            </Col>
                                        </div>

                                        <br />

                                        <div className='row'>
                                            <Col xs={4}>
                                                <Button bsStyle='primary' onClick={() => this.confirmWorkerDialog()}>Aceptar</Button>
                                            </Col>
                                        </div>


                                    </Modal.Body>
                                </Modal>
                                <ToastContainer
                                    position='bottom-left'
                                    autoClose={3000}
                                    hideProgressBar={true}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <DragAndDropCalendar
                                eventPropGetter={this.styledEvents}
                                selectable
                                events={this.state.events}
                                defaultDate={new Date()}
                                onEventDrop={this.moveEvent}
                                onEventResize={this.resizeEvent}
                                defaultView='month'
                                onSelectEvent={this.handleModalEventShow}
                                style={calendarStyle}
                            />
                            <Modal show={this.state.showEventModal} onHide={this.handleModalEventClose}>
                                <Modal.Header>
                                    <h3>Edit event</h3>
                                </Modal.Header>
                                <Modal.Body>
                                    
                                    <div className='row'>
                                        <Col xs={3}>
                                            <label>Title:</label>
                                            <input type='text' name='title' className='form-control' placeholder='title' value={this.state.updatedEvent.title} onChange={(e)=>this.handleModalEventChange(e.target.name, e.target.value)}/>
                                        </Col>
                                        <Col xs={3}>
                                            <label>Start:</label>
                                            <DatePicker onChange={this.onChangeUpdateStartDate} value={this.state.updatedEvent.start} />
                                        </Col>
                                        <Col xs={3}>
                                            <label>End:</label>
                                            <DatePicker onChange={this.onChangeUpdateEndDate} value={this.state.updatedEvent.end} />
                                        </Col>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button bsStyle='warning'onClick={()=>this.editEvent()}>Edit</Button>
                                    <Button bsStyle='danger' onClick={()=>this.removeEvent()}>Remove</Button>
                                </Modal.Footer>
                            </Modal>
                        </Row>
                    </Panel.Body>

                </Panel>
            </Grid>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    //console.log('calendar state ', state)
    return {
        events: state.calendar.events,
        workers: state.workers.workers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveEvent: events => dispatch(calendarAction.calendarEvents(events)),
        changeEvent: events => dispatch(calendarAction.updateEvent(events)),
        deleteEvent: id => dispatch(calendarAction.deleteEvent(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DragDropContext(HTML5Backend)(MyCalendar));