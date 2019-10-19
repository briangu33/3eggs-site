import React, { Component } from 'react'
import {
  Box,
  Button
} from 'grommet/es6'
import ShopifyBuy from '@shopify/buy-button-js'
import HeaderBar from '../../components/header-bar/HeaderBar'

const ShopifyButton = () => {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: '3-eggs.myshopify.com',
      storefrontAccessToken: '60455669164538708997241b3895164c',
    });
    var ui = ShopifyBuy.UI.init(client);
    // ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '4288948600878',
        node: document.getElementById('product-component-1571458139895'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      }
    },
    "buttonDestination": "checkout",
    "text": {
      "button": "Buy now"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "cart": {
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    }
  }
  },
    });
  }
}

class Store extends Component {
  render() {
    ShopifyButton();
    return (
      <Box
        direction='column'
        overflow='hidden'
      >
        <HeaderBar/>
        <Box
          height='100px'
        >
        </Box>
        <div id='product-component-1571458139895'></div>

      </Box>
    );
  }

  componentDid
}

export default Store;
