import React, { Component } from 'react';
import MyCalendar from './MyCalendar'
import Login from './Login';
import { Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import history from '../history';

function CambiarPagina(props) {
    const paginaActual = props.activePage;
    if (paginaActual === 'login') {
        return <Login />
    }
    return <MyCalendar />
}

var mainStyle={
    backgroundColor: '#DDDDDD',
    height:'100%'
}

class Main extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.history);
        this.state = {
            activeItem: 'home'
        }
    }

    pushRoute(ruta) {
        history.push(ruta);
    }

    handleItemClick = (name) => this.setState({ activeItem: name })

    render() {

        return (
            <div>
                <div>
                    <Nav bsStyle='tabs'  >
                        <NavItem name='calendar' onClick={(event) => this.handleItemClick(event.target.name)}>
                            Calendar
                        </NavItem>
                        <NavItem name='campogravitatoriao' title='Item' onClick={(event) => this.handleItemClick(event.target.name)}>
                            Team
                        </NavItem>
                        <NavItem name='login' onClick={(event) => this.handleItemClick(event.target.name)}>
                            Login
                        </NavItem>
                        <NavDropdown title='Settings' id='nav-dropdown'>
                            <MenuItem>Change multiplier</MenuItem>
                            <MenuItem >Auto-schedule</MenuItem>
                            <MenuItem divider />
                            <MenuItem >Logout</MenuItem>
                        </NavDropdown>
                    </Nav>
                </div>
                <div style={mainStyle}>
                    <CambiarPagina activePage={this.state.activeItem} />
                </div>
            </div>


        );
    }
}

export default Main;