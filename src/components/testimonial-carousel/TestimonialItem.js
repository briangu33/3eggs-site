import React, { Component } from 'react'
import { Box, Heading, Image, Text } from 'grommet'
import filledStar from '../../res/star-purple-filled.png'
import emptyStar from '../../res/star-purple-empty.png'

const EggRating = (props) => (
  <Box
    direction='row'
    align='center'
    justify='center'
    gap='6px'
    height='22px'
  >
    {[0, 1, 2, 3, 4].map(i => (
      <Image
        height='100%'
        key={i}
        fit='contain'
        src={(i < props.rating) ? filledStar : emptyStar}
      />
    ))}
  </Box>
);

class TestimonialItem extends Component {
  render () {
    return (
      <Box
        border={{
          side: 'all',
          color: '#e4e4e4',
          style: 'solid',
          size: 'small'
        }}
        direction='column'
        round='xsmall'
        height='330px'
        width='260px'
        align='center'
        justify='center'
        margin='small'
      >
        <Box
          justify='center'
          align='center'
          direction='column'
          gap='medium'
          width='100%'
          height='80%'
          pad='24px'
        >
          <EggRating rating={this.props.rating} />
          <Text weight='bold' textAlign='center'>{this.props.testimonial}</Text>
        </Box>
        <Box
          border={{
            side: 'top',
            color: '#eeeeee',
            style: 'solid',
            size: 'small'
          }}
          pad='12px'
          width='100%'
          height='20%'
          justify='start'
          align='center'
          direction='row'
          gap='medium'
        >
          <Box
            flex={{ grow: '0' }}
            height='100%'
          >
            <Image
              height='100%'
              fit='contain'
              src={this.props.avatar}
            />
          </Box>
          <Box
            flex={{ grow: '1' }}
          >
            <Text color='dark-1'>{this.props.name}</Text>
          </Box>
        </Box>
      </Box>
    )
  }
}

export default TestimonialItem;
