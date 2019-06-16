import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./react_modules/store";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import NotFound from "./react_modules/containers/notfound/notfound";
import Admin from "./react_modules/containers/admin/admin";
import App from "./react_modules/App";

export const client = new ApolloClient({
  uri: "http://localhost:3001/api"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/depot" />
          <Route path="/depot" component={App} />
          <Route path="/admin" component={Admin} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
serviceWorker.unregister();
