import { Box, Button } from 'grommet/es6'
import React from 'react'
import { Heading, Image, Text } from 'grommet'
import threeEggs from '../../res/3-eggs-light.png'
import styled from 'styled-components'

const PrimaryButton = styled(Button)`
  background-color: #597579;
  color: #ffffff;
  border: unset;
  text-align: center;
  line-height: 36px;
  display: inline-block;
  font-weight: bold;
`

const HeroBanner = () => (
  <Box direction='column' justify='start' align='center' height='600px'>
    <Box
      fill
      pad='medium'
    >
      <Box
        fill
        align='center'
        justify='center'
        direction='row'
        background='accent-1'
        round='medium'
      >
        <Box
          basis='40%'
          align='start'
          justify='center'
          direction='column'
          pad={{
            vertical: 'large',
            left: 'xlarge',
            right: 'none'
          }}
        >
          <Box
            width='300px'
            gap='large'
          >
            <Box>
              <Heading textAlign='left'>Welcome to your eggs.</Heading>
              <Text size='medium' textAlign='left'>We send you three eggs. (In&nbsp;the&nbsp;mail.)</Text>
            </Box>
            <PrimaryButton
              label='Give Me The Eggs'
              primary={true}
              href='/shop'
              color='neutral-3'
            />
          </Box>
        </Box>
        <Box
          basis='60%'
          height='100%'
          align='center'
          justify='center'
          pad={{
            vertical: 'large',
            left: 'large',
            right: 'xlarge'
          }}
        >
          <Image
            width='100%'
            fit='contain'
            src={threeEggs}
          />
        </Box>
      </Box>
    </Box>
  </Box>
);

export default HeroBanner;
