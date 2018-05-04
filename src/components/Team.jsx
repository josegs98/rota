import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css"; import cellEditFactory from 'react-bootstrap-table2-editor';
import * as workerAction from '../actions/AddWorker';
import { connect } from 'react-redux';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Grid, Col, Button, Panel } from 'react-bootstrap';

class Team extends Component {

    allWorkersColumns = [{
        formatter: (cell, row) => <Button bsStyle='info' onClick={() => this.props.deleteWorkerLocal(row.dni)}>Remove from On Call Pool</Button>
    },
    {
        dataField: 'dni',
        text: 'Product ID',
    },
    {
        dataField: 'name',
        text: 'Product Name'
    }, {
        dataField: 'price',
        text: 'Product Price'
    }];

    allWorkersRow=[{
        dni: 'Product ID',
        name: 'Pepito',
        surname: 'González'
    }, {
        dni: 'Product Name',
        name: 'Juanito',
        surname: 'González'
    }, {
        dni: 'Product Price',
        name: 'Fulanito',
        surname: 'González'
    }];

    submitWorker(input) {
        this.props.createWorkerLocal(input)
    }

    render() {
        return (
            <div>
                <br/>
                <Col xs={5} xsOffset={1}>
                    <ReactTable
                        data={this.props.workers}
                        columns={[
                            {
                                Header: "On call workers",
                                columns: [
                                    {
                                        Header: "DNI",
                                        accessor: "dni"
                                    },

                                    {
                                        Header: "Name",
                                        accessor: "name",

                                    },
                                    {
                                        Header: 'Surname',
                                        accessor: 'surname'
                                    },
                                    {
                                        Header: 'Delete worker',
                                        accessor: 'deleteWorker',
                                        Cell: row => (
                                            <Button block bsSize='small' bsStyle='danger' onClick={() => this.props.deleteWorkerLocal(row.original.dni)}>
                                                <span className='glyphicon glyphicon-remove '></span>
                                            </Button>
                                        )
                                    },
                                ]
                            },
                        ]}
                        defaultPageSize={10}
                        className="-striped -highlight"
                    />
                </Col>
                <Col xs={5} xsOffset={1}>
                    <ReactTable
                        data={this.allWorkersRow}
                        columns={[
                            {
                                Header: "All workers",
                                columns: [
                                    {
                                        Header: "DNI",
                                        accessor: "dni"
                                    },

                                    {
                                        Header: "Name",
                                        accessor: "name",

                                    },
                                    {
                                        Header: 'Surname',
                                        accessor: 'surname'
                                    },
                                    {
                                        Header: 'Delete worker',
                                        accessor: 'deleteWorker',
                                        Cell: row => (
                                            <Button block bsSize='small' onClick={()=>this.props.createWorkerLocal(row.original)} >Add to on Call Pool</Button>
                                        )
                                    },
                                ]
                            },
                        ]}
                        defaultPageSize={10}
                        className="-striped -highlight"
                    />
                </Col>
                <br />
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    console.log('state', state)
    return {
        workers: state.workers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createWorkerLocal: worker => dispatch(workerAction.createWorker(worker)),
        deleteWorkerLocal: dni => dispatch(workerAction.deleteWorker(dni))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Team);