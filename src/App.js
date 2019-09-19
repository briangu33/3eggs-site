import React, { Component } from 'react';
import { grommet, Grommet } from 'grommet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './scenes/landing/Landing'
import About from './scenes/about/About'
import Store from './scenes/store/Store'
import FAQ from './scenes/faq/FAQ'
import ScreenSizeContext from './components/ScreenSizeContext'
import { deepMerge } from 'grommet/utils'

const theme = deepMerge(grommet, {
  global: {
    breakpoints: {
      medium: 1000
    },
    colors: {
      brand: '#ffaf54',
      'accent-1': '#73ffff',
      'accent-2': '#b973ff',
      text: '#555555'
    },
    font: {
      family: 'Circular Pro',
      size: '14px',
      height: '20px',
    },
  },
  heading: {
    font: 'Avenir Next'
  }
});

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
