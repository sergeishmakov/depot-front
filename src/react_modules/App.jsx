import React, { Fragment, Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Main from "./components/main/main";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { autenticateUser, logoutUser } from "./actions/usersActions";
import Register from "./containers/register/register";
import Profile from "./containers/profile/profile";
import EditProfile from "./containers/editprofile/editprofile";
import Catalog from "./containers/catalog/catalog";
import ProductPage from "./components/productpage/productpage";
import { AdminBar, AdminLink } from "../style";

class App extends Component {
  state = {
    show: false
  };
  toggle = () => {
    this.setState({
      show: !this.state.show
    });
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
    const user = this.props.users;
    return (
      <Fragment>
        {user.status === "admin" && (
          <AdminBar>
            <AdminLink href="/admin" />
          </AdminBar>
        )}
        <Header
          show={show}
          handleShow={this.handleShow}
          user={this.props.users.email ? this.props.users : false}
          onLogOut={this.onLogOut}
          handleClose={this.handleClose}
          toggle={this.toggle}
        />
        <Main>
          <Switch>
            <Route exact path="/depot" component={Catalog} />
            <Route path="/depot/profile" component={Profile} />
            <Route path="/depot/edit-profile" component={EditProfile} />
            <Route path="/depot/register" component={Register} />
            <Route path="/depot/product" component={ProductPage} />
            <Redirect to="/notfound" />
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
