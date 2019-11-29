import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Wrapper from './../src/components/shared/wrapper/wrapper';
import App from './../src/components/index';

import './../src/assets/scss/app.scss';

// // comment this lines when you dont want to auto run ReactDOM.render
// const el = document.getElementById('counter-app');
// ReactDOM.render(
//     <BrowserRouter>
//         <Switch>
//             <Route exact path="/" component={App} />
//             <Route component={Wrapper} /> 
//         </Switch>          
//     </BrowserRouter>, el);

window.ReactCounter = {
    mount: () => {
        const el = document.getElementById('counter-app');
        ReactDOM.render(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route component={Wrapper} /> 
                </Switch>          
            </BrowserRouter>, el);
    },
    unmount: () => {
        const el = document.getElementById('counter-app');
        ReactDOM.unmountComponentAtNode(el);
    }
}
