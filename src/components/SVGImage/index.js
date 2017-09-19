import {pure} from 'recompact';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SVGInline from 'react-svg-inline';

class SVGImage extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    alt: PropTypes.string,
  };

  static defaultProps = {
    className: null,
    alt: null,
  };

  render() {
    const info = require(`../../../content/assets/icons/${this.props.name}`); // eslint-disable-line import/no-dynamic-require, global-require

    return (
      <SVGInline
        className={this.props.className}
        svg={info}
        alt={this.props.alt}
      />
    );
  }
}

export default pure(SVGImage);
