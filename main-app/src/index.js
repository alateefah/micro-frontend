import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './components/dashboard/dashboard';
import Login from './components/login/login';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/login" component={Login} />
        </Switch>          
    </BrowserRouter>, 
    document.getElementById('root')
);
