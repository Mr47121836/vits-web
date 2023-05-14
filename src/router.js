import React from 'react';
import { Router,Route, Switch } from 'dva/router';
import HomePage from './HomePage.js';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/Home" exact component={HomePage} />
      </Switch>
    </Router>
  );
}
export default RouterConfig;
