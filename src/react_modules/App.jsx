import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import Main from "./components/main/main";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { autenticateUser, logoutUser } from "./actions/usersActions";

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

        <Main>{this.props.children}</Main>
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
