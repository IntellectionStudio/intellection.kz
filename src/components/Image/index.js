import {pure} from 'recompact';
import React, {Component, PropTypes} from 'react';

import styles from './index.css';

class responsiveImage extends Component {
  // background - if set to true, the component will render a background image

  static propTypes = {
    alt: PropTypes.string.isRequired,
    background: PropTypes.bool.isRequired,
    className: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    sizes: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  };
  state = {
    width: false,
    loaded: true,
    src: false,
  };

  retrieveImageSizes = () => {
    //  const toRequire = require(`../../../content/src`);
    //  console.log(toRequire);
  };
  // receives the image, src and gets it by using require
  render() {
    return (
      <img
        className={styles.this.props.className}
        src={this.retrieveImageSizes}
        alt={``}
      />
    );
  }
}

const enhancedResponsiveImage = pure(responsiveImage);

export default enhancedResponsiveImage;
