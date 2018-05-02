import React, { Component } from 'react';
import { Grid, Table, Row, Col, Button, Panel } from 'react-bootstrap';

var styledPanel={
    height:'50vh'
};

class Team extends Component {
    render() {
        return (
            <Grid>
                <Panel style={styledPanel}>
                    <Panel.Body>
                        
                            <br />
                            <Col smOffset={1} sm={4}>
                                <Table striped bordered condensed hover>
                                    <caption>List of workers</caption>
                                    <thead>
                                        <tr>
                                            <th>DNI</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td><Button bsSize='small' bsStyle='danger'>Quit</Button></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td><Button bsSize='small' bsStyle='danger'>Quit</Button></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td colSpan="2">Larry the Bird</td>
                                            <td><Button bsSize='small' bsStyle='danger'>Quit</Button></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col smOffset={1} sm={4}>
                                <Table striped bordered condensed hover>
                                    <caption>Choose a worker</caption>
                                    <thead>
                                        <tr>
                                            <th>DNI</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td><Button bsSize='small'>On call</Button></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td><Button bsSize='small'>On call</Button></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td colSpan="2">Larry the Bird</td>
                                            <td><Button bsSize='small'>On call</Button></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Lebron</td>
                                            <td>James</td>
                                            <td><Button bsSize='small'>On call</Button></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Nathan</td>
                                            <td>Drake</td>
                                            <td><Button bsSize='small'>On call</Button></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                    </Panel.Body>
                </Panel>
            </Grid>
        );
    }
}

export default Team;