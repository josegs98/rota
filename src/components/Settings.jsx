import React, { Component } from 'react';
import { Panel, Row, Grid, Col, Button } from 'react-bootstrap';
import TimePicker from 'react-bootstrap-time-picker';

import { connect } from 'react-redux';
import * as settings from '../actions/Settings';

class Settings extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
        this.handleFinishTimeChange = this.handleFinishTimeChange.bind(this);
        this.state = {
            startTime: '0',
            finishTime: '0',
            baseMoney: '1',
            baseTime: '1',
            moneyMultiplier: '1',
            timeMultiplier: '1',
            weekendMoney: '1',
            weekMoney: '1'
        }
        if (this.props.settings.length===0){
            this.props.createSettings(this.state);
        }
        

    }

    componentWillReceiveProps(props){
        this.setState(this.props.settings);
    }

    handleStartTimeChange(startTime) {
        console.log('start time=> ', startTime) ;
        this.setState({ startTime });
    }

    handleFinishTimeChange(finishTime) {
        console.log('finish time=> ', finishTime) ;    
        this.setState({ finishTime });

    }

    handleChange = (name, value ) => {
        this.setState({ [name]: value });
    }

    submitNewChanges(){
       this.props.createSettings(this.state);
    }

    render() {
        return (
            <Grid>
                <Panel>
                    <Panel.Body>
                        
                            <Row>
                                <Col sm={5} smOffset={1}>
                                    <label htmlFor=''>Base Money: </label><br /> &nbsp;<input name='baseMoney' className='form-control' type='text' onChange={(e)=>{
                                        this.handleChange(e.target.name, e.target.value)
                                    }} placeholder='Money' value={this.state.baseMoney}/>
                                </Col>
                                <Col sm={5} smOffset={1}>
                                    <label htmlFor=''>Base Time: </label><br /> &nbsp;<input name='baseTime' className='form-control' type='text' onChange={(e)=>{
                                        this.handleChange(e.target.name, e.target.value)
                                    }} placeholder='Time' value={this.state.baseTime}/>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col sm={5} smOffset={1}>
                                    <label htmlFor=''>Money Multiplier: </label><br /> &nbsp;<input name='moneyMultiplier' className='form-control' onChange={(e)=>{
                                        this.handleChange(e.target.name, e.target.value)
                                    }} type='text' placeholder='Money Multiplier' value={this.state.moneyMultiplier}/>
                                </Col>
                                <Col sm={5} smOffset={1}>
                                    <label htmlFor=''>Time Multiplier: </label><br /> &nbsp;<input name='timeMultiplier' className='form-control' onChange={(e)=>{
                                        this.handleChange(e.target.name, e.target.value)
                                    }} type='text' placeholder='Time Multiplier' value={this.state.timeMultiplier}/>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col sm={5} smOffset={1}>
                                    <label htmlFor=''>Weekend Money: </label><br /> &nbsp;<input name='weekendMoney' onChange={(e)=>{
                                        this.handleChange(e.target.name, e.target.value)
                                    }} className='form-control' type='text' placeholder='Weekend Money' value={this.state.weekendMoney}/>
                                </Col>
                                <Col sm={5} smOffset={1}>
                                    <label htmlFor=''>Week Money: </label><br /> &nbsp;<input name='weekMoney' onChange={(e)=>{
                                        this.handleChange(e.target.name, e.target.value)
                                    }} className='form-control' type='text' placeholder='Week Money' value={this.state.weekMoney}/>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col sm={5} smOffset={1}>
                                    Start time: &nbsp; <TimePicker name='startTime' onChange={this.handleStartTimeChange} value={this.state.startTime} step={10} format={24} />
                                </Col>
                                <Col sm={5} smOffset={1}>
                                    Finish time: &nbsp; <TimePicker name='finishTime' onChange={this.handleFinishTimeChange} value={this.state.finishTime} step={10} format={24} />
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col sm={5} smOffset={9}>
                                    <Button type='submit' bsStyle='primary' onClick={()=>this.submitNewChanges()}>Save changes</Button>
                                </Col>
                            </Row>
                    </Panel.Body>
                </Panel>
            </Grid>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('settings state ', state)
    return {
        settings: state.settings.settings
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createSettings: settingsDefault => dispatch(settings.defaultSettings(settingsDefault))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);