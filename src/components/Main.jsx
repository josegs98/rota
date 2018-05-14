import React, { Component } from 'react';
import Team from './Team';
import MyCalendar from './MyCalendar';
import { Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import history from '../history';
import ModalHoras from './ModalHoras';
import Settings from './Settings';

function CambiarPagina(props) {
    const paginaActual = props.activePage;
    if (paginaActual === 'team'){
        return <Team/>;
    }

    if (paginaActual==='calendar'){
        return <MyCalendar/>
    }

    if (paginaActual==='settings'){
        return <Settings/>
    }

    return <MyCalendar/>


}

var menuStyle={
    backgroundColor: '#F8F8F8',
    borderColor: '#E7E7E7'
}

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show:false,
            activeItem: 'home'
        }
        this.changeModalState = this.changeModalState.bind(this);
    }

    pushRoute(ruta) {
        console.log('Estas en pushRoute ',ruta);
        history.push(ruta);
        //history.go();
    }

    mostrarModal(){
        this.setState({show:true});
    }

    handleItemClick = (name) => this.setState({ activeItem: name })

    changeModalState() {
        console.log('LOL',this.state.show)
        this.setState({show: false});
    }

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
                        <NavItem name='settings' onClick={(event) => this.handleItemClick(event.target.name)}>Settings</NavItem>
                        <NavDropdown title='settings' id='nav-dropdown'>
                            <MenuItem onSelect={()=>this.setState({show:true})}>Change multiplier</MenuItem>
                            <MenuItem >Auto-schedule</MenuItem>
                            <MenuItem divider />
                            <MenuItem onSelect={()=>this.pushRoute('/login')}>Logout</MenuItem>
                        </NavDropdown>
                        <ModalHoras show={this.state.show} changeModalState={this.changeModalState}/>

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