import React, { Component } from 'react';
import App from './App'
import Login from './Login';
import { Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

function CambiarPagina(props){
    const paginaActual=props.activePage;
    if (paginaActual=='campogravitatoriao'){
        return <Login />
    }
    return null
}

class Menu extends Component{
    
    constructor(props){
        super(props);
        console.log(this.props.history);
        this.state = {
            activeItem : 'home'
        }
    }
    
    pushRoute(ruta){
        this.props.history.push(ruta);
    }

    handleItemClick = (name) => this.setState({activeItem: name})

    render(){
        
        const { activeItem } = this.state
        return(
            <div>
            <Nav bsStyle="tabs" activeKey="1" >
                <NavItem eventKey="1" href="/home" onClick={this.handleItemClick}>
                    Calendar
                </NavItem>
                <NavItem eventKey="2" name="campogravitatoriao" title="Item" onClick={(event) => this.handleItemClick(event.target.name)}>
                    Team
                </NavItem>
                <NavItem eventKey="login" onClick={()=>this.pushRoute('/login')}>
                    Login
                </NavItem>
                <NavDropdown eventKey="4" title="Settings" id="nav-dropdown">
                    <MenuItem eventKey="4.1">Change multiplier</MenuItem>
                    <MenuItem eventKey="4.2">Auto-schedule</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4.4">Logout</MenuItem>
                </NavDropdown>
            </Nav>
            <CambiarPagina history= {this.props.history} activePage={this.state.activeItem}/>
            </div>

        );
    }
}

export default Menu;