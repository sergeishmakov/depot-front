import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./react_modules/App";
import store from "./react_modules/store";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Catalog from "./react_modules/containers/catalog/catalog";
import Users from "./react_modules/containers/users/users";
import Register from "./react_modules/containers/register/register";
import Login from "./react_modules/containers/login/login";
import Profile from "./react_modules/containers/profile/profile";
import EditProfile from "./react_modules/containers/editprofile/editprofile";
import Error from "./react_modules/containers/error/error";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Catalog} />
          <Route path="/users" component={Users} />
          <Route path="/profile" component={Profile} />
          <Route path="/edit-profile" component={EditProfile} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="*" component={Error} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
