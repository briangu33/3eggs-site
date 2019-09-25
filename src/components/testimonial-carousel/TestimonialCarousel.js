import React, { Component } from 'react'
import { Box, Heading } from 'grommet'
import TestimonialItem from './TestimonialItem'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class TestimonialCarousel extends Component {
  render() {
    const settings = {
      className: "slider variable-width",
      centerMode: true,
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
        <Heading level='3'>All Your Eggs In One Basket</Heading>
        <Box
          width='70%'
        >
          <Slider {...settings}>
            <TestimonialItem
              testimonial='hello world 1'
            />
            <TestimonialItem
              testimonial='hello world 2'
            />
            <TestimonialItem
              testimonial='hello world 3'
            />
            <TestimonialItem
              testimonial='hello world 4'
            />
            <TestimonialItem
              testimonial='hello world 5'
            />
            <TestimonialItem
              testimonial='hello world 6'
            />
            <TestimonialItem
              testimonial='hello world 7'
            />
          </Slider>
        </Box>
      </Box>
    );
  }
}

export default TestimonialCarousel;
