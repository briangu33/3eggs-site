import React, { Component } from 'react'
import {
  Box,
  Button,
  Collapsible,
  Heading, Layer,
  ResponsiveContext,
} from 'grommet/es6'
import { FormClose, Notification } from 'grommet-icons/es6'
import HeaderBar from '../../components/header-bar/HeaderBar'

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

class Store extends Component {
  state = {
    showSidebar: false,
  }

  render() {
    const { showSidebar } = this.state;
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <HeaderBar/>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default Store;
