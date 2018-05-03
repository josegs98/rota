import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import * as workerAction from '../actions/AddWorker';
import {connect} from 'react-redux';
import { Grid, Col, Button, Panel } from 'react-bootstrap';

var styledPanel = {
    height: '50vh'
};

const allWorkersColumns = [{
    dataField: 'dni',
    text: 'Product ID',
    formatter: (cell, row) => <Button bsStyle='info' onClick={() => this.props.createWorker(row.id)}>Remove from On Call Pool</Button>
}, {
    dataField: 'name',
    text: 'Product Name'
}, {
    dataField: 'price',
    text: 'Product Price'
}];

const allWorkers = [{
    dni: '1231234',
    name: 'Pepito',
    price:'12.99$'
}, {
    dni: '794234L',
    name: 'Juanito',
    price:'12.99$'
}, {
    dni: '47675467',
    name: 'Fulanito',
    price:'12.99$'
},
{
    dni: '467756755',
    name: 'Fulanito',
    price:'12.99$'
},
{
    dni: '46747567',
    name: 'Fulanito',
    price:'12.99$'
},
{
    dni: '46647567',
    name: 'Fulanito',
    price:'12.99$'
}
];

const designatedWorkersColumns=[{
    dataField: 'dni',
    text: 'DNI'
}, {    
    dataField: 'name',
    text: 'Name'
}, {
    dataField: 'surname',
    text: 'Surname'
}];

const designatedWorkers = [{
    dni: 'Product ID',
    name: 'Pepito',
    surname:'González'
}, {
    dni: 'Product Name',
    name: 'Juanito',
    surname:'González'
}, {
    dni: 'Product Price',
    name: 'Fulanito',
    surname:'González'
    
}
];

var workerDefault={
    dni:'28932R',
    name:'por defecto',
    surname:'garcia'
}

class Team extends Component {

    submitWorker(input){
        this.props.createWorkerLocal(input)
    }

    render() {
        return (
            <Grid>
                <Panel style={styledPanel}>
                    <Panel.Body>
                        <Button onClick={()=> {this.submitWorker(workerDefault)}}>Añadir trabajador</Button>
                        <Col xsOffset={1} xs={5}>
                            <BootstrapTable
                                keyField='dni'
                                data={allWorkers}
                                columns={allWorkersColumns}
                                cellEdit={cellEditFactory({ mode: 'click' })}
                            />
                        </Col>
                        <Col xsOffset={1} xs={5}>
                            <BootstrapTable
                                keyField='dni'
                                data={designatedWorkers}
                                columns={designatedWorkersColumns}
                                cellEdit={cellEditFactory({ mode: 'click' })}
                            />
                        </Col>
                    </Panel.Body>
                </Panel>
            </Grid>
        );
    }
}
const mapStateToProps=(state, workerLocal)=>{
    return{
        workerLocal:state.worker
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        createWorkerLocal:worker=>dispatch(workerAction.createWorker(worker))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Team);