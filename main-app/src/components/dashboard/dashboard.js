import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class Dashboard extends Component {

  componentDidMount(){
    window.ReactCounter.mount();
  }

    render() {
        
        return (
            <div className="dashboard">                
                  I am dashboard. I should list all apps or display a particular app
               
                  <Switch>
                      <Route exact>
                        <div id="counter-app"></div>
                        {/* list all apps here */}
                      </Route>

                      {/* List all other apps with the app basename as path */}
                      {/* 1. */}
                      <Route path="/form-m">
                        <div id="counter-app"></div>
                      </Route>

                  </Switch>
            </div>
        );
    }
}

export default Dashboard;
