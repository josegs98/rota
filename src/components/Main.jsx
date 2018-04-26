import React, { Component } from 'react';
import Team from './Team';
import MyCalendar from './MyCalendar';
import { Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import history from '../history';

function CambiarPagina(props) {
    const paginaActual = props.activePage;
    if (paginaActual === 'team'){
        return <Team/>
    }else{
        return <MyCalendar/>
    }
}
 var menuStyle={
    backgroundColor: '#F8F8F8',
    borderColor: '#E7E7E7'
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
        console.log('Estas en pushRoute ',ruta);
        history.push(ruta);
        //history.go();
    }

    handleItemClick = (name) => this.setState({ activeItem: name })

    render() {
        return (
            <div>
                <div>
                    <Nav bsStyle='tabs' style={menuStyle}>
                        <NavItem name='calendar' onClick={(event) => this.handleItemClick(event.target.name)}>
                            Calendar
                        </NavItem>
                        <NavItem name='team' title='Item' onClick={(event) => this.handleItemClick(event.target.name)}>
                            Team
                        </NavItem>
                        {/*<NavItem name='login' onClick={(event) => this.handleItemClick(event.target.name)}>
                            Login
                        </NavItem>*/}
                        <NavDropdown title='Settings' id='nav-dropdown'>
                            <MenuItem>Change multiplier</MenuItem>
                            <MenuItem >Auto-schedule</MenuItem>
                            <MenuItem divider />
                            <MenuItem onClick={()=>this.pushRoute('/login')}>Logout</MenuItem>
                        </NavDropdown>
                    </Nav>
                </div>
                <div>
                    <CambiarPagina activePage={this.state.activeItem} />
                </div>
            </div>


        );
    }
}

export default Main;