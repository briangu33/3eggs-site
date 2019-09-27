import React, { Component } from 'react'
import { Box, Heading, Image, Text } from 'grommet'

class PressItem extends Component {
  render() {
    return (
      <Box
        direction='column'
        justify='center'
        align='center'
        margin={{
          horizontal: 'small'
        }}
      >
        <Image
          height='100%'
          fit='contain'
          onClick={() => window.location=this.props.href}
          src={this.props.src}
          style={{cursor: 'pointer'}}
        />
        <Text
          size='medium'
          textAlign='center'
          alignSelf='center'
        >
        {this.props.children}
        </Text>
      </Box>
    );
  }
}

export default PressItem;