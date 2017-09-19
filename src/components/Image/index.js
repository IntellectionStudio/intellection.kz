import {pure} from 'recompact';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  static propTypes = {
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    background: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    contain: PropTypes.bool,
    ref: PropTypes.func,
  };

  static defaultProps = {
    className: null,
    contain: false,
    background: false,
  };

  handleBackgroundMeasure = dimensions =>
    this.setState({
      image: {
        width: dimensions.width,
      },
    });

  render() {
    const info = {
      src: require(`../../../content/assets/images/${this.props.name}`), // eslint-disable-line
    };
    if (this.props.background) {
      // eslint-disable-next-line
      const bestFitImage = require(`../../../content/assets/images/${this.props
        .name}`);

      return (
        <div
          className={this.props.className}
          style={{
            background:
              typeof this.props.background === 'string'
                ? `${this.props
                    .background}, url('${bestFitImage}') center center / ${this
                    .props.contain
                    ? 'contain'
                    : 'cover'} no-repeat`
                : `url('${bestFitImage}') center center / ${this.props.contain
                    ? 'contain'
                    : 'cover'} no-repeat`,
          }}
        >
          {this.props.children}
        </div>
      );
    }

    return (
      <img
        className={this.props.className}
        src={info.src}
        alt={this.props.alt}
        ref={this.props.ref}
      />
    );
  }
}

export default pure(Image);
