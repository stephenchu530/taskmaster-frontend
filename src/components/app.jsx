import React from 'react';

import Header from './header.jsx';
import Main from './main.jsx';
import Footer from './footer.jsx';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}

export default App;
