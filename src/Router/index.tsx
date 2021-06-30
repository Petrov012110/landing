import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { paths } from './paths';

export const Router = () => (
  <Switch>
    {paths.map((path, i) => (
      <Route key={i}  {...path} />
    ))}
  </Switch>
);