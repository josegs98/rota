import React, { Component } from 'react';
import ImageLogin from '../images/login.png'
import { Grid, Panel, Col, Form, Row, Image, Button } from 'react-bootstrap';
import history from '../history';

var panelStyle = {
    marginTop: '5px'
}

class Login extends Component {
  
    submitLogin(ruta){
        console.log('SUBMIT LOGIN => ',history)
        history.push(ruta);
    }

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
                            <Form onSubmit={()=>this.submitLogin('/main')}>
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
                                <br/>
                                <Row>
                                    <Col mdOffset={3} md={5}>
                                        <Button bsStyle='primary' type='submit'>Entrar</Button>
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