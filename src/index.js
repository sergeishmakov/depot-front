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

import Error from "./react_modules/containers/error/error";
import Admin from "./react_modules/containers/admin/admin";
import App from "./react_modules/App";

const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/index" />
          <Route path="/index" component={App} />
          <Route path="/admin" component={Admin} />
          <Route path="/error" component={Error} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
serviceWorker.unregister();
