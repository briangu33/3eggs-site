import React, { Component } from 'react';
import { Grommet } from 'grommet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './scenes/landing/Landing'

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
          </Switch>
        </Grommet>
      </Router>
    );
  }
}

export default App;
