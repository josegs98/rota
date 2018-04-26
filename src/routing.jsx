import React, {Component} from 'react';
import Main from './components/Main';
import Login from './components/Login'
import {createBrowserHistory} from 'history';
import {Switch, Router, Route } from 'react-router';

const history=createBrowserHistory();

class Routing extends Component{
    
    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route path='/' component={Main}/>
                    <Route path='/main' component={Main}/>
                    <Route path='/login' component={Login}/>
                </Switch>
            </Router>
        );
    }
}

export default Routing;