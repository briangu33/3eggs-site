import React, { Component } from 'react';
import {
  Box,
  Heading,
} from 'grommet';
import ScreenSizeContext from '../ScreenSizeContext'

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
        <Heading level='3' alignSelf='start' textAlign='left'>{this.props.headline}</Heading>
        {this.props.children}
      </Box>
    );
  }
}

class LandingGoodThingMobile extends Component {
  render () {
    return (
      <Box
        width='100%'
        margin={{
          top: 'small'
        }}
      >
        <Box
          fill
          align='center'
          justify='center'
          direction='column'
          pad={{
            vertical: 'small',
            horizontal: 'medium',
          }}
          gap='small'
        >
          <Box
            align='center'
            justify='center'
            background='white'
          >
            {this.props.children[1]}
          </Box>
          <GoodThingText headline={this.props.headline}>
            {this.props.children[0]}
          </GoodThingText>
        </Box>
      </Box>
    )
  }
}

class LandingGoodThingWeb extends Component {
  render () {
    return (
      <Box
        width='850px'
        margin={{
          top: 'small'
        }}
        align='center'
        justify='center'
        direction='row'
      >
        {this.props.imagePos === 'right' && (
        <GoodThingText headline={this.props.headline}>
          {this.props.children[0]}
        </GoodThingText>
        )}
        <Box
          width='400px'
          align='start'
          justify='center'
          pad='small'
          margin={{
            horizontal: 'small'
          }}
          background='white'
          round='large'
        >
          {this.props.children[1]}
        </Box>
        {this.props.imagePos === 'left' && (
        <GoodThingText headline={this.props.headline}>
          {this.props.children[0]}
        </GoodThingText>
        )}
      </Box>
    )
  }
}

const LandingGoodThing = (props) => (
  <ScreenSizeContext.Consumer>
    { screenSize => screenSize.width > 768 ?
      (<LandingGoodThingWeb {...props} />) : (<LandingGoodThingMobile {...props} />) }
  </ScreenSizeContext.Consumer>
)

export default LandingGoodThing;
