import React, { Component } from 'react';
import Home from './home';
import Login from './login';
import Signup from './signup';
import { Router, Route, browserHistory } from 'react-router';
import DashBoard from './dashboard';
import NotFound from './notfound';
class AppRoutes extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route exact path='/' component={Home} />
                <Route path='/home' component={Home} />
                <Route path='/signup' component={Signup} />
                <Route path='/login' component={Login} />
                <Route path='/dashboard' component={DashBoard} />
                <Route path='*' component={NotFound} />
            </Router >
        );
    }
}
export default AppRoutes;