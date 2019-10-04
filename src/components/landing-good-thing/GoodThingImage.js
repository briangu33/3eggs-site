import React, { Component } from 'react'
import {Image} from 'grommet/es6'

class GoodThingImage extends Component {
  render () {
    return  (
      <Image
        width='100%'
        fit='contain'
        src={this.props.src}
        style={{'border-radius': '10px'}}
      />
    );
  }
}

export default GoodThingImage;