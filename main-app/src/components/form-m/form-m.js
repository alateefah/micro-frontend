import React, { Component } from 'react';

class FormM extends Component {

  componentDidMount(){
    window.ReactCounter.mount();
  }

    render() {
        
        return (
            
                <div id="counter-app"></div>
            
        );
    }
}

export default FormM;
