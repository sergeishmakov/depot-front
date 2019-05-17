import React, {Component, Fragment} from 'react';

import Main from '../../components/main/main';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import './users.css';

class Home extends Component {
  render () {
    return (
      <Fragment>
        <Header />
        <Main>
          <h1>Users page</h1>

        </Main>
        <Footer />
      </Fragment>
    );
  }
}
export default Home;
