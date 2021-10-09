import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import routes from './data';

import Header from '../components/header';

const Routers = () => {
  return (
    <Router>
      <Header />
      <Switch>
        {
          routes.map(route => <Route exact key={route.path} path={route.path} component={route.component} />)
        }
        <Redirect path="*" to="/" />
      </Switch>
    </Router>
  )
}

export default Routers;
