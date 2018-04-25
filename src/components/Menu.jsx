import React, { Component } from 'react';
import { Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

class Menu extends Component{
    
    handleSelect(eventKey) {
        alert(`selected ${eventKey}`);
    }

    render(){
        return(
            <Nav bsStyle="tabs" activeKey="1" onSelect={k => this.handleSelect(k)}>
                <NavItem eventKey="1" href="/home">
                    Calendar
                </NavItem>
                <NavItem eventKey="2" title="Item">
                    Team
                </NavItem>
                <NavItem eventKey="3">
                    Settings
                </NavItem>
                <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
                    <MenuItem eventKey="4.1">Change multiplier</MenuItem>
                    <MenuItem eventKey="4.2">Auto-schedule</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4.4">Logout</MenuItem>
                </NavDropdown>
            </Nav>
        );
    }
}

export default Menu;