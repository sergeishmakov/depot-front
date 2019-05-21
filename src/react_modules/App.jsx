import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux';
import Main from './components/main/main';
import Header from './components/header/header';
import Footer from './components/footer/footer';

class App extends Component {
  state = {
    visible: false,
  };

  render () {
    return (
      <Fragment>
        <Header />
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

const mapDispatchToProps = {};

export default connect (mapStateToProps, mapDispatchToProps) (App);
