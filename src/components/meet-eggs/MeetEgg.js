import React, { Component } from 'react';
import {
  Box,
  Heading, Image, Text,
} from 'grommet'
import portable from '../../res/3-good-things/thing3.JPG'

class MeetEgg extends Component {
  render () {
    return (
      <Box
        width='100%'
        height='100%'
        align='center'
        justify='center'
        pad={{
          vertical: 'small',
          horizontal: 'medium'
        }}
      >
        <Image
          width='100%'
          fit='contain'
          src={portable}
        />
        <Heading level='3'>{this.props.headline}</Heading>
        <Text>{this.props.description}</Text>
      </Box>
    );
  }
}

export default MeetEgg;
