import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as workerAction from '../actions/AddWorker';

import ReactTable from 'react-table';
import { Col, Button, Grid } from 'react-bootstrap';
import { Select } from 'antd';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'react-table/react-table.css';

const Option = Select.Option;


class Team extends Component {

    allWorkersRow = [{
        dni: '89998322L',
        name: 'Pepito',
        surname: 'González'
    }, {
        dni: '89298322T',
        name: 'Juanito',
        surname: 'González'
    }, {
        dni: '89992322P',
        name: 'Fulanito',
        surname: 'González'
    }];

    constructor(props) {
        super(props);

        this.addOnCallWorker = this.addOnCallWorker.bind(this);
        this.handleWorker = this.handleWorker.bind(this);
        this.handleRoleWorker=this.handleRoleWorker.bind(this);

        if (this.props.allWorkers.length === 0) {
            this.allWorkersRow.map(item => this.props.insertAllWorkers(item))
        }
        this.state = {
            newWorker:
                {
                    name: '',
                    surname: '',
                    dni: '',
                    role:''
                }
        }
    }

    addOnCallWorker(worker) {
        console.log('row dni ', worker);
        var comprobarDni = true;

        this.props.workers.forEach((e) => {
            if (e.dni === worker.dni) {
                comprobarDni = false;
                console.log('dni iterado=> ', e.dni, 'dni introducido=> ', worker.dni)
            }
        })

        if (comprobarDni === false) {
            toast.error('Two same dni!');
        } else {
            this.props.createWorkerLocal(worker);
        }

    }

    deleteWorker(dni) {
        this.props.deleteFromAllWorkers(dni);
        this.props.workers.forEach((e) => {
            if (e.dni === dni) {
                this.props.deleteWorkerLocal(dni);
            }
        })
    }

    handleWorker = (value, name) => {
        this.setState({
            newWorker: {
                ...this.state.newWorker,
                [name]: value
            }
        })
    }

    handleRoleWorker = (value) => {
        this.setState({
            newWorker: {
                ...this.state.newWorker,
                role: value
            }
        })
    }

    createWorker() {
        var comprobarDni = true;
        this.props.allWorkers.forEach((e) => {
            if (this.state.newWorker.dni === e.dni) {
                comprobarDni = false;
                //console.log('trabajador nuevo dni=> ',this.state.newWorker.dni, ' comporbarDni=> ', comprobarDni, 'dni iterado=> ',e.dni);
            }
        })
        if (comprobarDni === false) {
            toast.error('Two same dni!');
        } else {
            this.props.insertAllWorkers(this.state.newWorker);
        }
        console.log(this.props.allWorkers)
    }

    render() {
        return (
            <Grid>
                <br />
                <div className='row'>
                    <Col xs={3}>
                        <h3> New Worker </h3>
                    </Col>
                </div>
                <hr />
                <div className='row'>
                    <Col xs={3}>
                        <label>Name</label>
                        <input name='name' className='form-control' placeholder='Name' type='text' onChange={(e) => this.handleWorker(e.target.value, e.target.name)} />
                    </Col>

                    <Col xs={3}>
                        <label>Surname</label>
                        <input name='surname' className='form-control' placeholder='Surname' type='text' onChange={(e) => this.handleWorker(e.target.value, e.target.name)} />
                    </Col>
                    <Col xs={2}>
                        <label>DNI</label>
                        <input name='dni' className='form-control' placeholder='Dni' type='text' onChange={(e) => this.handleWorker(e.target.value, e.target.name)} />
                    </Col>
                    <Col xs={2}>
                        <label>Worker Role</label>
                        <Select
                            size='default'
                            defaultValue='Select role worker'
                            name='roleSelection'
                            onChange={(e) => this.handleRoleWorker(e)}
                        >
                            <Option value='standard'>Standard</Option>
                            <Option value='onCallManager'>On call Manager</Option>
                            <Option value='admin'>Admin</Option>
                        </Select>
                    </Col>
                    <br />
                    <Col xs={2} >
                        <Button bsStyle='primary' onClick={() => this.createWorker()}>Add worker</Button>
                    </Col>
                </div>
                <hr />
                <div className='row'>
                    <Col xs={6}>
                        <ReactTable
                            data={this.props.workers}
                            filterable
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
                                            filterable: false,
                                            Cell: row => (
                                                <Button block bsSize='small' bsStyle='danger' onClick={() => this.props.deleteWorkerLocal(row.original.dni)}>
                                                    <span className='glyphicon glyphicon-remove '></span>
                                                </Button>
                                            )
                                        },
                                    ]
                                },
                            ]}
                            style={{
                                height: "600px" // This will force the table body to overflow and scroll, since there is not enough room
                            }}
                            defaultPageSize={10}
                            className="-striped -highlight"
                        />
                    </Col>
                    <Col xs={6}>
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

                                                } ><span className='glyphicon glyphicon-plus'></span></Button>
                                            )
                                        },
                                        {
                                            Header: 'Delete worker',
                                            accessor: 'deleteworker',
                                            filterable: false,
                                            Cell: row => (
                                                <Button block bsSize='small' bsStyle='danger' onClick={() => this.deleteWorker(row.original.dni)}>
                                                    <span className='glyphicon glyphicon-remove '></span>
                                                </Button>
                                            )
                                        }
                                    ]
                                },
                            ]}
                            defaultPageSize={10}
                            style={{
                                height: "600px" // This will force the table body to overflow and scroll, since there is not enough room
                            }}
                            className="-striped -highlight"
                        />
                        <ToastContainer
                            position='bottom-left'
                            autoClose={3000}
                            hideProgressBar={true}
                        />
                    </Col>
                </div>
            </Grid>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        workers: state.workers.workers,
        allWorkers: state.workers.allWorkers
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