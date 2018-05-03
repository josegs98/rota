import React, {Component} from 'react';
import Main from './components/Main';
import Login from './components/Login';
import Team from './components/Team';
import {Switch, Router, Route } from 'react-router';
import history from './history';

class Routing extends Component{
    
    render(){
        return(
            <Router history={history}>
                <Switch>
                    <div>
                        <Route exact path='/' component={Login}/>
                        <Route path='/team' component={Team}/>
                        <Route path='/main' component={Main}/>
                        <Route path='/login' component={Login}/>
                    </div>
                </Switch>
            </Router>
        );
    }
}

export default Routing;