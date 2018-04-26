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
                        <Route path='/' exact component={Login}/>
                        <Route path='/team' exact component={Team}/>
                        <Route path='/main' exact component={Main}/>
                        <Route path='/login' exact component={Login}/>
                    </div>
                </Switch>
            </Router>
        );
    }
}

export default Routing;