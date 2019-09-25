import React, { Component } from 'react'
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Layer,
  ResponsiveContext,
  Text
} from 'grommet/es6'
import { FormClose, Notification } from 'grommet-icons/es6'
import HeaderBar from '../../components/header-bar/HeaderBar'
import { Link } from 'react-router-dom'

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

class FAQ extends Component {
  state = {
    showSidebar: false,
  }

  render() {
    const { showSidebar } = this.state;
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <HeaderBar/>
            <Box
              align='center'
              justify='center'
              width='100%'
            >
              <Box
                width='large'
                pad={{
                  horizontal: 'large',
                }}
                margin={{
                  bottom: 'large'
                }}
              >
                <Heading>FAQ</Heading>
                <Heading size='small'>Q: What are Eggs?</Heading>
                <Text>
                  Eggs are small, round objects produced by <a href="https://simple.wikipedia.org/wiki/Chicken">chickens</a>.
                  They can often be found in grocery stores, farms, and refrigerators -
                  believe it or not, you may even have a few eggs in your own home!

                  Eggs have several uses:
                  <ul>
                    <li>Eggs are extremely versatile, and can be used for a variety of arts and crafts.</li>
                    <li>Eggs are rich in protein and fat. In many cultures they are cooked and consumed for their nutritional value. Note that the eggs we provide are NOT suitable for consumption.</li>
                    <li>Eggs have mass, and in sufficient quantities (at least 3) can be used as a doorstop or paperweight.</li>
                  </ul>
                </Text>
                <Heading size='small'>Q: CAN I EAT THESE EGGS?</Heading>
                <Text>
                  No! Our product is intended as a fun gag gift between friends -
                  the eggs we mail are shipped unrefrigerated and are ABSOLUTELY NOT meant for consumption,
                  and we make this clear on every package. Please do not eat these eggs. You are going to get sick. 
                </Text>
                <Heading size='small'>Q: How can I tell my Eggs apart?</Heading>
                <Text>
                  Every package contains three eggs: Left Egg, Middle Egg, and Michael.
                  It’s easy to tell them apart! Left Egg is on the left, Middle Egg is in the middle,
                  and Michael enjoys listening to heavy metal and playing billiards. For more infomation,
                  please visit <Link to='about'>Meet the Eggs</Link>.
                </Text>
                <Heading size='small'>Q: I ordered 3 Eggs but only received two eggs.</Heading>
                <Text>
                  Please contact us directly. Our dedicated customer support team will respond within 24 hours
                  to either offer you a full refund or replacement order.
                </Text>
                <Heading size='small'>Q: I ordered 3 Eggs but received four eggs?</Heading>
                <Text>
                  Please contact law enforcement immediately. One of these is not an egg.
                </Text>
                <Heading size='small'>Q: One of my eggs arrived broken.</Heading>
                <Text>
                  Every egg comes with a 96-hour warranty.
                  Send the eggs back to us and we’ll return them repaired in 4-10 business days,
                  along with a refund for your shipping cost.
                  Please DO NOT try to repair the eggs yourself - attempting to do so will invalidate the warranty.
                </Text>
                <Heading size='small'>Q: Will these eggs hatch?</Heading>
                <Text>
                  This is a common misconception -- eggs don't actually hatch like in the fairy-tales.
                </Text>
                <Box height={{min: '75px'}}></Box>
              </Box>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default FAQ;
