import React, { Component } from 'react'
import {
  Box,
  ResponsiveContext,
} from 'grommet/es6'
import HeaderBar from '../../components/header-bar/HeaderBar'
import { Carousel, Heading, Text } from 'grommet'
import styled from 'styled-components'
import MeetEgg from '../../components/meet-eggs/MeetEgg'

const TopHeading = styled(Heading)`
  color: #F8F8F8;
`;

class About extends Component {
  state = {
    showSidebar: false,
  }

  render() {
    return (
      <Box
        width='100%'
        direction='column'
        align='center'
      >
        <HeaderBar/>
        <Box
          justify='center'
          align='center'
          width='100%'
          height='400px'
          background='neutral-3'
        >
          <TopHeading level='2'>Eggs are for everyone.</TopHeading>
        </Box>
        <Box
          pad={{ horizontal: 'large' }}
          margin={{ vertical: 'large' }}
          width='100%'
          gap='medium'
        >
          <Heading level='3'>Committed to eggs-ellence</Heading>
          <Text>From humble beginnings and big dreams, our story begins with two friends and their belief that everyone - no matter what age, gender, race, or religion - deserves to have three eggs.</Text>
          <Text>We believe that small things can have big impacts, and that global change can start with something as small as an egg. 3 EGGS is building a community of thinkers, creators, and entrepreneurs, three eggs at a time.</Text>
        </Box>
        <Box
          justify='center'
          align='center'
          width='100%'
          height='400px'
          background='neutral-3'
        >
          <TopHeading level='2'>A principled philosophy.</TopHeading>
        </Box>
        <Box
          pad={{ horizontal: 'large' }}
          margin={{ vertical: 'large' }}
          width='100%'
          gap='medium'
        >
          <Heading level='3'>Our core values</Heading>
          <Text>3 EGGS was founded on a handful of values: simplicity, sustainability, and user-focused design.</Text>
          <Text><strong>Simplicity.</strong> In an age of distraction and addictiveness, we're focusing on what matters. 3 EGGS just mails you three eggs, the old-fashioned way.</Text>
          <Text><strong>Sustainability.</strong> We're firm believers in leaving the planet better than we found it. All of our eggs are 100% biodegradable and engineered with sustainability in mind.</Text>
          <Text><strong>User-focused design.</strong> Our world-class team has worked tirelessly to bring you the most beautiful and functional egg designs, updated for the modern era.</Text>
        </Box>
        <Box
          justify='center'
          align='center'
          width='100%'
          height='400px'
          background='neutral-3'
        >
          <TopHeading level='2'>Do not eat the eggs.</TopHeading>
        </Box>
        <Box
          pad={{ horizontal: 'large' }}
          margin={{ vertical: 'large' }}
          width='100%'
          gap='medium'
        >
          <Heading level='3'>The eggs are shipped unrefrigerated</Heading>
          <Text>This should go without saying, but you definitely shouldn't eat these eggs. They are shipped unrefrigerated and are not intended for consumption.</Text>
          <Text>There are plenty of things you can do with your eggs besides cooking or eating them. Keep them in a pouch or a small pot. Hang them in your room to liven things up. Gift them to a friend, if you're feeling generous. Just don't try to eat them.</Text>
        </Box>
        <Box
          justify='center'
          align='center'
          width='100%'
          height='400px'
          background='neutral-3'
        >
          <TopHeading level='2'>Meet the team</TopHeading>
        </Box>
        <Box>
          <Carousel
            fill
            controls='arrows'
            play={5000}
          >
            <MeetEgg
              headline={'Left Egg'}
              description={'Left egg is on the left.'}
            />
            <MeetEgg
              headline={'Middle Egg'}
              description={'Middle egg is in the middle.'}
            />
            <MeetEgg
              headline={'Michael'}
              description={'Michael joined 3 EGGS in as an Egg Intern before becoming a full time Egg in 2017. In this role, Michael is responsible for being on the right of every set of 3 EGGS. In his free time, Michael enjoys swimming and hip-hop music.'}
            />
          </Carousel>
        </Box>
      </Box>
    );
  }
}

export default About;
