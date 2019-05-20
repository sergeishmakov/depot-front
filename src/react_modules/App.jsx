import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux';
import Main from './components/main/main';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Login from './containers/login/login';
import {autenticateUser, logoutUser} from './actions/usersActions';

class App extends Component {
  state = {
    visible: false,
  };
  onVisibleLoginForm = e => {
    e.preventDefault ();
    this.setState ({visible: true});
  };
  onClickBackground = e => {
    this.setState ({visible: false});
  };
  onLogOut = () => {
    this.props.logoutUser ();
  };
  componentWillMount () {
    this.props.autenticateUser ();
  }
  render () {
    return (
      <Fragment>
        <Header
          onVisibleLoginForm={this.onVisibleLoginForm}
          user={this.props.users.email ? this.props.users : false}
          onLogOut={this.onLogOut}
        />
        {this.state.visible &&
          <div onClick={this.onClickBackground} className="background" />}
        {this.state.visible &&
          <Login onClickBackground={this.onClickBackground} />}
        <Main>
          {this.props.children}
        </Main>
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = {
  autenticateUser,
  logoutUser,
};

export default connect (mapStateToProps, mapDispatchToProps) (App);
