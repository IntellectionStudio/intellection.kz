/* @flow */

import React from 'react';
import cx from 'classnames';

import styles from './index.css';

const API_KEY = 'AIzaSyDHzwnCkK6DwTntBvi2avh6imL2Y5W_Ts0';
const googleMapURL = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=Intellection`;

const Map = ({className}) => (
  <div
    className={cx(styles.intrinsicContainer, {
      [className]: !!className,
    })}
  >
    <iframe
      title={'Google map'}
      frameBorder="0"
      src={googleMapURL}
      allowFullScreen
    />
  </div>
);

export default Map;
