import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import * as workerAction from '../actions/AddWorker';
import { connect } from 'react-redux';
import { Col, Button } from 'react-bootstrap';

class Team extends Component {
    contador = 0;
    general = 0;

    allWorkersRow = [{
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

    constructor(props) {
        super(props);
        this.addOnCallWorker = this.addOnCallWorker.bind(this);
        if ( this.props.allWorkers.length === 0){
            this.allWorkersRow.map(item => this.props.insertAllWorkers(item))
        }
    }

    addOnCallWorker(row) {
        console.log('addOnCallWorker ', row)
        this.props.createWorkerLocal(row);
    }

    render() {
        return (
            <div>
                <br />
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
                        data={this.props.allWorkers}
                        filterable
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
                                        Header: 'On call pool',
                                        accessor: 'oncallpool',
                                        filterable: false,
                                        Cell: row => (
                                            <Button block bsSize='small' onClick={() =>

                                                this.addOnCallWorker(row.original)

                                            } >Add to on Call Pool</Button>
                                        )
                                    },
                                    {
                                        Header: 'Delete worker',
                                        accessor: 'deleteworker',
                                        filterable: false,
                                        Cell: row => (
                                            <Button block bsSize='small' bsStyle='danger' onClick={() => this.props.deleteFromAllWorkers(row.original.dni)}>
                                                <span className='glyphicon glyphicon-remove '></span>
                                            </Button>
                                        )
                                    }
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
    console.log('state ', state)
    return {
        workers: state.workers,
        allWorkers: state.allWorkers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createWorkerLocal: worker => dispatch(workerAction.createWorker(worker)),
        deleteWorkerLocal: dni => dispatch(workerAction.deleteWorker(dni)),
        insertAllWorkers: allWorkers => dispatch(workerAction.insertAllWorkers(allWorkers)),
        deleteFromAllWorkers: dniallworker => dispatch(workerAction.deleteFromAllWorkers(dniallworker))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Team);