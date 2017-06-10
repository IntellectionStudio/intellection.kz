import {pure} from 'recompact';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Measure from 'react-measure';

class responsiveImage extends Component {
  // background - if set to true, the component will render a background image

  static propTypes = {
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    background: PropTypes.bool,
    children: PropTypes.object,
    contain: PropTypes.bool,
  };

  static defaultProps = {
    className: null,
    contain: false,
  };

  state = {
    info: require(`../../../content/assets/images/${this.props.name}`), // eslint-disable-line import/no-dynamic-require, global-require
    image: {
      width: 0,
    },
  };

  handleBackgroundMeasure = dimensions =>
    this.setState({
      image: {
        width: dimensions.width,
      },
    });

  render() {
    const info = require(`../../../content/assets/images/${this.props.name}`); // eslint-disable-line import/no-dynamic-require, global-require
    if (this.props.background) {
      const images = info.srcSet
        .split(',')
        .map(intermediateValue => intermediateValue.split(' '))
        .map(array => ({width: array[1], path: array[0]}));

      const imagesBigger = images.filter(
        image => parseInt(image.width, 10) > this.state.image.width,
      );
      let bestFitImage;
      if (imagesBigger.length === 0) {
        bestFitImage = images[images.length - 1].path;
      } else {
        bestFitImage = imagesBigger[0].path;
      }
      return (
        <Measure onMeasure={this.handleBackgroundMeasure}>
          <div
            className={this.props.className}
            style={{
              background: `url('${bestFitImage}') center center / ${this.props.contain ? 'contain' : 'cover'} no-repeat`,
            }}
          >
            {this.props.children}
          </div>
        </Measure>
      );
    }
    return (
      <img
        className={this.props.className}
        src={info.src}
        srcSet={this.state.info.srcSet}
        alt={this.props.alt}
      />
    );
  }
}

export default pure(responsiveImage);
