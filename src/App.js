import React, { Component } from 'react';
import { Grommet } from 'grommet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './scenes/landing/Landing'
import About from './scenes/about/About'
import Store from './scenes/store/Store'
import FAQ from './scenes/faq/FAQ'

const theme = {
  global: {
    colors: {
      brand: '#228B86',
    },
    font: {
      family: 'Open Sans',
      size: '14px',
      height: '20px',
    },
  },
};

class App extends Component {
  render() {
    return (
      <Router>
        <Grommet theme={theme} full>
          <Switch>
            <Route exact path={'/'} component={Landing} />
            <Route exact path={'/about'} component={About} />
            <Route exact path={'/shop'} component={Store} />
            <Route exact path={'/faq'} component={FAQ} />
          </Switch>
        </Grommet>
      </Router>
    );
  }
}

export default App;
