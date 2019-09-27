import React, { Component } from 'react'
import { Box, Heading } from 'grommet'
import PressItem from './PressItem'
import timeImage from '../../res/press/time.jpeg'
import wsjImage from '../../res/press/wsj.jpeg'
import tcImage from '../../res/press/techcrunch.jpeg'

class Press extends Component {
  render() {
    return (
      <Box
        align='center'
        justify='center'
        width='100%'
      >
        <Box
          width='850px'
          height='400px'
          margin={{
            top: 'small'
          }}
          justify='start'
          direction='column'
        >
          <Heading level='2' margin={{ bottom: 'none' }}>The Eggs They Are On The News</Heading>
          <Box
            width='100%'
            direction='row'
            justify='center'
            margin={{
              top: 'small'
            }}
          >
            <PressItem src={timeImage} href="https://time.com/5641700/viral-eggs-history/">
              "Eggs are uncontroversial."
            </PressItem>
            <PressItem src={wsjImage} href="https://blogs.wsj.com/moneybeat/2013/11/18/future-for-egg-derivatives-fragile-in-china/">
              "Notoriously fragile and&nbsp;perishable."
            </PressItem>
            <PressItem src={tcImage} href="https://techcrunch.com/2016/09/01/blue-aprons-farm-egg-makes-me-question-everything/">
              "Makes me question everything."
            </PressItem>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Press;