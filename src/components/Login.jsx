import React, { Component } from 'react';
import ImageLogin from '../images/login.png'
import { Grid, Panel, Col, Form, Row, Image } from 'react-bootstrap';

var panelStyle = {
    marginTop: '5px'
}

class Login extends Component {

    render() {
        return (
            <Grid >
                <Col xs={6} xsOffset={3}>
                    <Panel style={panelStyle}>
                        <Panel.Body>
                            <Row>
                                <Col smOffset={3} sm={6}>
                                    <Image alt='La imagen no ha cargado' src={ImageLogin} rounded responsive/>
                                </Col>
                            </Row>
                            <hr />
                            <Form>
                                <Row>
                                    <Col mdOffset={3} md={5}>
                                        <label htmlFor=''>Correo electrónico: </label>&nbsp;
                                    <input className='form-control' type='text' placeholder='Email' />
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col mdOffset={3} md={5}>
                                        <label htmlFor=''>Contraseña: </label>&nbsp;
                                    <input className='form-control' type='password' placeholder='Contraseña' />
                                    </Col>
                                </Row>
                            </Form>
                        </Panel.Body>
                        <Panel.Footer>
                            Lorem ipsum
                        </Panel.Footer>
                    </Panel>
                </Col>
            </Grid>
        );
    }
}

export default Login;