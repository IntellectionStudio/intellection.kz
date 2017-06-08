import {pure} from 'recompact';
import React, {Component, PropTypes} from 'react';

class responsiveImage extends Component {
  // background - if set to true, the component will render a background image

  static propTypes = {
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    background: PropTypes.bool,
  };

  static defaultProps = {
    className: null,
  };

  state = {
    info: {},
  };

  componentWillMount() {
    this.setState({
      info: require(`../../../content${this.props.name}`), // eslint-disable-line import/no-dynamic-require, global-require
    });
  }

  // receives the image, src and gets it by using require
  render() {
    console.log('======', this.state);
    if (this.props.background) {
      return (
        <div
          className={this.props.className}
          style={{
            background: `url('${this.state.info.src}') center center / contain no-repeat`,
          }}
        />
      );
    }
    return (
      <img
        className={this.props.className}
        src={this.state.info.src}
        srcSet={this.state.info.srcSet}
        alt={this.props.alt}
      />
    );
  }
}

const enhancedResponsiveImage = pure(responsiveImage);

export default enhancedResponsiveImage;
