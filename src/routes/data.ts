import React from 'react';

import Home from '../pages/home';
import Login from '../pages/login';
import Register from '../pages/register';

interface Route {
  path: string,
  component: React.FC
}

const routes: Array<Route> = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
];

export default routes;
