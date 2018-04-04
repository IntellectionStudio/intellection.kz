import {pure} from 'recompact';
import React from 'react';
import PropTypes from 'prop-types';
import SVGInline from 'react-svg-inline';

const SVGImage = ({name, className, alt}) => {
  const info = require(`../../../content/assets/icons/${name}`); // eslint-disable-line import/no-dynamic-require, global-require

  return <SVGInline className={className} svg={info} alt={alt} />;
};

SVGImage.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string,
};

SVGImage.defaultProps = {
  className: null,
  alt: null,
};

export default pure(SVGImage);
