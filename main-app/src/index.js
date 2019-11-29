import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './components/dashboard/dashboard';
import Login from './components/login/login';
import FormM from './components/form-m/form-m';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/form-m" component={FormM} />
        </Switch>          
    </BrowserRouter>, 
    document.getElementById('root')
);
