import React, { Component } from 'react'
import { Box, Heading } from 'grommet'
import TestimonialItem from './TestimonialItem'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import alexAvatar from '../../res/alex-circle.png'
import elliottAvatar from '../../res/elliott-circle.png'
import ivanAvatar from '../../res/ivan-circle.png'
import khanhAvatar from '../../res/khanh-circle.png'
import peterAvatar from '../../res/peter-circle.png'
import sarahAvatar from '../../res/sarah-circle.png'
import serenaAvatar from '../../res/serena-circle.png'

class TestimonialCarousel extends Component {
  render() {
    const settings = {
      className: "slider variable-width",
      centerMode: true,
      focusOnSelect: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      initialSlide: 3
    };
    return (
      <Box
        align='center'
        justify='center'
        width='100%'
      >
        <Heading level='2' margin={{ bottom: 'none' }}>You Deserve A Good Egg</Heading>
        <Heading level='4'>Real people, real eggs.</Heading>
        <Box>
          <Slider {...settings}>
            <TestimonialItem
              testimonial={'Box was very nice but not sure why my friend ordered these to me.'}
              rating={4}
              name='Elliott'
              avatar={elliottAvatar}
            />
            <TestimonialItem
              testimonial={'Delightfully useless'}
              rating={5}
              name='Sarah'
              avatar={sarahAvatar}
            />
            <TestimonialItem
              testimonial={'I\'m not totally sure what I expected, but 3 eggs definitely delivered on their promise to mail me three eggs.'}
              rating={4}
              name='Serena'
              avatar={serenaAvatar}
            />
            <TestimonialItem
              testimonial='This is, like, the worst way to do groceries.'
              rating={3}
              name='Peter'
              avatar={peterAvatar}
            />
            <TestimonialItem
              testimonial='honestly kind of bummed that I bought these'
              rating={2}
              name='Ivan'
              avatar={ivanAvatar}
            />
            <TestimonialItem
              testimonial={'The best thing since two eggs, probably.'}
              rating={5}
              name='Khanh'
              avatar={khanhAvatar}
            />
            <TestimonialItem
              testimonial='Friend sent this to me. Kyle, you ****'
              rating={5}
              name='Alex'
              avatar={alexAvatar}
            />
          </Slider>
        </Box>
      </Box>
    );
  }
}

export default TestimonialCarousel;
