import React, { Component } from 'react';
import { Panel, Grid, Image, Col } from 'react-bootstrap';
import ImageMoney from '../images/money.png'

class Compensations extends Component {
    render() {
        return (
            <Grid>
                <br/>
                <Panel>
                    <Panel.Heading>
                        <div className='row'>
                            <Col xs={1}>
                                <Image alt='La imagen no ha cargado' src={ImageMoney}  responsive/>
                            </Col>
                            <Col xs={3}>
                                <h3>Compensations</h3>
                            </Col>
                        </div>
                    </Panel.Heading>
                    <Panel.Body>

                    </Panel.Body>
                </Panel>
            </Grid>
        );


    }
}

export default Compensations;