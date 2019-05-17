import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './react_modules/App';
import store from './react_modules/store';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import Home from './react_modules/containers/home/home';
import Users from './react_modules/containers/users/users';
import Register from './react_modules/containers/register/register';
import Error from './react_modules/containers/error/error';
import Login from './react_modules/containers/login/login';

ReactDOM.render (
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/register" component={Register} />
          <Route path="*" component={Error} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById ('root')
);
serviceWorker.unregister ();
