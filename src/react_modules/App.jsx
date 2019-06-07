import React, { Fragment, Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Main from "./components/main/main";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { autenticateUser, logoutUser } from "./actions/usersActions";
import Users from "./containers/users/users";
import Register from "./containers/register/register";
import Login from "./containers/login/login";
import Profile from "./containers/profile/profile";
import EditProfile from "./containers/editprofile/editprofile";
import Catalog from "./containers/catalog/catalog";

class App extends Component {
  state = {
    show: false
  };
  handleShow = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  onLogOut = () => {
    this.props.logoutUser();
  };
  componentWillMount() {
    this.props.autenticateUser();
  }
  authorization = () => {
    this.props.authorizationUser().then(response => {
      if (response.user) this.props.history.push("/");
    });
  };
  render() {
    const { show } = this.state;

    return (
      <Fragment>
        <Header
          show={show}
          handleShow={this.handleShow}
          user={this.props.users.email ? this.props.users : false}
          onLogOut={this.onLogOut}
          handleClose={this.handleClose}
        />
        <Main>
          <Switch>
            <Route exact path="/index" component={Catalog} />
            <Route path="/index/users" component={Users} />
            <Route path="/index/profile" component={Profile} />
            <Route path="/index/edit-profile" component={EditProfile} />
            <Route path="/index/register" component={Register} />
            <Route path="/index/login" component={Login} />
            <Redirect to="/admin" />
            <Redirect to="/error" />
          </Switch>
        </Main>
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = {
  autenticateUser,
  logoutUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
