import React from 'react';

const Dashboard = React.lazy(() => import('./components/dashboard/dashboard'));
const FormM =   React.lazy(() => import('./components/form-m/form-m'));

const routes = [ 
    { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/form-m', exact: true, name: 'Form M', component: FormM }
]

export default routes;