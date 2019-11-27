import React, { Component } from 'react';

class Wrapper extends Component {

    componentDidMount(){
        window.ReactCounter.mount();
    }
    render() {
        return (
            <div>                
                {/* <div id="counter-app"></div> */}
            </div>
        );
    }
}

export default Wrapper;
