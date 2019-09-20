import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Heading,
  Image,
  Menu,
  ResponsiveContext,
  Text,
  ThemeContext,
} from 'grommet';

class GoodThingText extends Component {
  render () {
    return (
      <Box
        basis='60%'
        height='100%'
        align='center'
        justify='center'
        pad={{
          vertical: 'small',
          left: 'medium',
          right: 'medium'
        }}
      >
        <Heading size='small' alignSelf='start' textAlign='left'>{this.props.headline}</Heading>
        {this.props.children}
      </Box>
    );
  }
}

class LandingGoodThing extends Component {
  render () {
    return (
      <Box
        width='750px'
        height='300px'
        margin={{
          vertical: 'medium'
        }}
      >
        <Box
          fill
          align='center'
          justify='center'
          direction='row'
        >
          {this.props.imagePos === 'right' && (
          <GoodThingText headline={this.props.headline}>
            {this.props.children}
          </GoodThingText>
          )}
          <Box
            basis='40%'
            height='100%'
            align='start'
            justify='center'
            direction='column'
            pad={{
              vertical: 'small',
              left: 'small',
              right: 'small'
            }}
            margin={{
              left: 'small',
              right: 'small'
            }}
            background='accent-1'
          >
            <Box
              width='300px'
              gap='large'
              background='accent-1'
            >
            </Box>
          </Box>
          {this.props.imagePos === 'left' && (
          <GoodThingText headline={this.props.headline}>
            {this.props.children}
          </GoodThingText>
          )}
        </Box>
      </Box>
    )
  }
}

export default LandingGoodThing;
