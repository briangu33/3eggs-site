import React, { Component } from 'react';
import { Grommet } from 'grommet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './scenes/landing/Landing'
import About from './scenes/about/About'
import Store from './scenes/store/Store'
import FAQ from './scenes/faq/FAQ'
import ScreenSizeContext from './components/ScreenSizeContext'

const theme = {
  global: {
    breakpoints: {
      medium: 1000
    },
    colors: {
      brand: '#4ffcce',
    },
    font: {
      family: 'Open Sans',
      size: '14px',
      height: '20px',
    },
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <Router>
        <ScreenSizeContext.Provider value={ this.state }>
          <Grommet theme={theme} full>
              <Switch>
                <Route exact path={'/'} component={Landing} />
                <Route exact path={'/about'} component={About} />
                <Route exact path={'/shop'} component={Store} />
                <Route exact path={'/faq'} component={FAQ} />
              </Switch>
          </Grommet>
        </ScreenSizeContext.Provider>
      </Router>
    );
  }
}

export default App;
