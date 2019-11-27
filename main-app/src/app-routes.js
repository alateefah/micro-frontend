import React from 'react';
import MicroFrontend from './micro-frontend';

const FormM = React.lazy(() => import('./components/form-m/form-m'));

// const FormM = ({ history }) => (
//     <MicroFrontend history={history} name="FormM" />
// );

const routes = [ 
    { path: '/form-m', exact: true, name: 'Form M', component: FormM }
]

export default routes;