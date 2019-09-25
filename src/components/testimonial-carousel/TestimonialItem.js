import React, { Component } from 'react'
import { Box, Text } from 'grommet'

class TestimonialItem extends Component {
  render () {
    return (
      <Box
        border={{
          side: 'all',
          color: 'grey',
          style: 'solid',
          size: 'small'
        }}
        round='xsmall'
        height='320px'
        width='230px'
        align='center'
        justify='center'
        margin='small'
      >
        <Text>{this.props.testimonial}</Text>
      </Box>
    )
  }
}

export default TestimonialItem;
