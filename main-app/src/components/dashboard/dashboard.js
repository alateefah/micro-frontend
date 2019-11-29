import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Dashboard extends Component {

    render() {
        
        return (
            <div className="dashboard">                
                  I am dashboard. I should list all apps or display a particular app
                  <br /><br />
                  <Link to="/form-m">Form M</Link>
                  
            </div>
        );
    }
}

export default Dashboard;
