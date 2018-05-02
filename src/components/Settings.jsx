import React, { Component } from 'react';
import { Panel, Row, Grid, Col, Form, Button } from 'react-bootstrap';
import TimePicker from 'react-bootstrap-time-picker';

class Settings extends Component {
    
    constructor (props){
        super(props);

        this.handleTimeChange = this.handleTimeChange.bind(this);

        this.state={
            time:'0'
        }

    }

    handleTimeChange(time)  {
        console.log(time) ;     // <- prints "3600" if "01:00" is picked
        this.setState({ time });
    }

    render() {
        return (
            <Grid>
                <Panel>
                    <Panel.Body>
                        <Form inline>
                            <Row>
                                <Col sm={5} smOffset={1}>
                                    <label htmlFor=''>Base Money: </label><br /> &nbsp;<input className='form-control' type='text' placeholder='Money' />
                                </Col>
                                <Col sm={5} smOffset={1}>
                                    <label htmlFor=''>Base Time: </label><br /> &nbsp;<input className='form-control' type='text' placeholder='Time' />
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col sm={5} smOffset={1}>
                                    <label htmlFor=''>Money Multiplier: </label><br /> &nbsp;<input className='form-control' type='text' placeholder='Money Multiplier' />
                                </Col>
                                <Col sm={5} smOffset={1}>
                                    <label htmlFor=''>Time Multiplier: </label><br /> &nbsp;<input className='form-control' type='text' placeholder='Time Multiplier' />
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col sm={5} smOffset={1}>
                                    <label htmlFor=''>Weekend Money: </label><br /> &nbsp;<input className='form-control' type='text' placeholder='Weekend Money' />
                                </Col>
                                <Col sm={5} smOffset={1}>
                                    <label htmlFor=''>Week Money: </label><br /> &nbsp;<input className='form-control' type='text' placeholder='Week Money' />
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col sm={5} smOffset={1}>
                                    Start date: &nbsp; <TimePicker onChange={this.handleTimeChange} value={this.state.time} step={10} format={24}/>
                                </Col>
                                <Col sm={5} smOffset={1}>
                                    Finish date: &nbsp; <TimePicker onChange={this.handleTimeChange} value={this.state.time} step={10} format={24}/>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col sm={5} smOffset={9}>
                                    <Button type='submit' bsStyle='primary'>Save changes</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Panel.Body>
                </Panel>
            </Grid>
        );
    }
}

export default Settings;