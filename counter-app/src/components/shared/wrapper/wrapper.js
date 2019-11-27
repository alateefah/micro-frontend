import React, { Component, Suspense } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import routes from './../../../routes'

class Wrapper extends Component {

    loading = () => <div>Loading...</div>

    render () {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/form-m">Form M</Link>
                    </li>
                    <li>
                        <Link to="/shipments">Shipping Document</Link>
                    </li>
                    <li>
                        <Link to="/paar">PAAR </Link>
                    </li>
                </ul>

                <br/>
                <br />
                <Suspense fallback={this.loading()}>
                    <Switch>
                        {routes.map((route, index) => {
                            return route.component ?
                                <Route key={index} path={route.path} exact={route.exact} name={route.name} component={props => (<route.component {...props} /> )} />
                                :(null)
                        })}
                    </Switch>
                </Suspense>
            </div>
        )
    }
}

export default Wrapper;