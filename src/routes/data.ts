import React from 'react';

import Home from '../pages/home';

interface Route {
  path: string,
  component: React.FC
}

const routes: Array<Route> = [
  {
    path: '/',
    component: Home,
  },
];

export default routes;
