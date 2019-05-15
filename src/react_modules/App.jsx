import React, {Fragment} from 'react';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/main/main';

const App = ({children}) => (
  <Fragment>
    <Header />
    <Main>
      {children}
    </Main>
    <Footer />
  </Fragment>
);

export default App;
