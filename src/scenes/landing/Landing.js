import React, { Component } from 'react'
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Image,
  Layer,
  ResponsiveContext,
} from 'grommet/es6'
import HeaderBar from '../../components/header-bar/HeaderBar'
import LandingGoodThing from '../../components/landing-good-thing/LandingGoodThing'
import occasion from '../../res/3-good-things/thing2.JPG'
import eco from '../../res/3-good-things/thing1.JPG'
import portable from '../../res/3-good-things/thing3.JPG'
import { Text } from 'grommet'
import HeroBanner from './HeroBanner'
import TestimonialCarousel from '../../components/testimonial-carousel/TestimonialCarousel'
import Press from '../../components/press/Press'

class Landing extends Component {
  state = {
    showSidebar: false,
  }

  render() {
    return (
      <Box
        direction='column'
      >
        <HeaderBar/>
        <HeroBanner/>
        <TestimonialCarousel/>
        <Box>
          <Box direction='column' align='center' justify='center'>
            <LandingGoodThing imagePos='left' headline="Convenient And Portable">
                <Text size='medium'>
No bulky charger or wires to weigh you down - 3 eggs fits snugly in a purse or shoe. Our convenient and flexible design helps you take your eggs from home to travel in seconds.
                </Text>
                <Image
                  width='100%'
                  fit='contain'
                  src={portable}
                />
            </LandingGoodThing>
            <LandingGoodThing imagePos='right' headline="Perfect For Any Occasion">
                <Text justify='left' size='medium'>
3 eggs is the perfect gift for holidays, birthdays, or special occasions. From a heartfelt token of appreciation to an ironic and slightly confusing welcome gift, we’ve got you covered.
                </Text>
                <Image
                  width='100%'
                  fit='contain'
                  src={occasion}
                />
            </LandingGoodThing>
            <LandingGoodThing imagePos='left' headline="Eco-friendly">
                <Text size='medium'>
Each egg is 100% biodegradable and engineered with the environment in mind. When you’re done with your eggs, toss them in the compost bin to save the planet.
                </Text>
                <Image
                  width='100%'
                  fit='contain'
                  src={eco}
                />
            </LandingGoodThing>
          </Box>
        </Box>
        <Press/>
      </Box>
    );
  }
}

export default Landing;
