import React from 'react';
import {Route, Router, Switch} from 'dva/router';
import IndexPage from './routes/IndexPage';
import Login from './routes/Login';

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/admin" component={IndexPage}/>
        <Route path="/" component={Login}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
