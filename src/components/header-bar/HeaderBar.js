import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Image,
  Menu,
  ResponsiveContext,
  ThemeContext,
} from 'grommet';
import { Menu as MenuIcon } from 'grommet-icons';
import logoBlack from '../../res/logo-black.png';
import ScreenSizeContext from '../ScreenSizeContext'

const themeExtension = {
  text: {
    color: 'light'
  },
  button: {
    extend: {
      marginLeft: '10px',
      marginRight: '10px',
      fontSize: '16px'
    }
  }
};

const bigHeaderBar = (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='light'
    pad={{ left: 'medium', right: 'small', vertical: '12px' }}
    elevation='medium'
    style={{ zIndex: '1' }}
  >
    <Box
      direction='row'
      align='center'
      justify='start'
      basis='1/3'
    >
      <Button
        label='Store'
        href='/shop'
        plain={true}
      />
      <Button
        label='Meet the Eggs'
        href='/about'
        plain={true}
      />
      <Button
        label='FAQ'
        href='/faq'
        plain={true}
      />
    </Box>
    <Box
      direction='row'
      align='center'
      justify='center'
      basis='1/3'
      height='40px'
    >
      <Image
        src={logoBlack}
        height='100%'
        onClick={() => window.location='/'}
        style={{cursor: 'pointer'}}
      />
    </Box>
    <Box
      direction='row'
      align='center'
      justify='end'
      basis='1/3'
    >
      <Button
        label='Terms of Service'
        href='/terms'
        plain={true}
      />
      <Button
        label='Contact'
        href='/contact'
        plain={true}
      />
      <Button
        label='Shop'
        href='/shop'
        color='accent-1'
      />
    </Box>
  </Box>
);

const smallHeaderBar = (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='light'
    pad={{ left: 'medium', right: 'small', vertical: '12px' }}
    elevation='medium'
    style={{ zIndex: '1' }}
  >
    <Box
      direction='row'
      align='center'
      justify='start'
      basis='1/3'
    >
      <Menu
        icon={<MenuIcon/>}
        items={[
          {
            label: 'Store',
            href: '/shop'
          },
          {
            label: 'Meet the Eggs',
            href: '/about'
          },
          {
            label: 'FAQ',
            href: '/faq'
          },
          {
            label: 'Terms of Service',
            href: '/terms'
          },
          {
            label: 'Contact',
            href: '/contact'
          },
        ]}
      />
    </Box>
    <Box
      direction='row'
      align='center'
      justify='center'
      basis='1/3'
      height='40px'
    >
      <Image
        src={logoBlack}
        height='100%'
      />
    </Box>
    <Box
      direction='row'
      align='center'
      justify='end'
      basis='1/3'
    >
      <Button
        label='Shop'
        href='/shop'
        color='accent-1'
      />
    </Box>
  </Box>
);

class HeaderBar extends Component {
  render () {
    return (
      <ThemeContext.Extend value={themeExtension}>
        <ScreenSizeContext.Consumer>
          {screenSize => screenSize.width > 1100 ? bigHeaderBar : smallHeaderBar}
        </ScreenSizeContext.Consumer>
      </ThemeContext.Extend>
    )
  }
}

export default HeaderBar;
