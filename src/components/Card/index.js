/* @flow */

import React from 'react';

import styles from './index.css';

type PropsType = {|
  link: string,
  image: string,
  heading: string,
  text: string,
|};

const Card = ({link, image, heading, text}: PropsType) => (
  <div className={styles.root}>
    <a className={styles.container}>
      <img className={styles.image} src={image} alt={link} />
      <div>
        <h6 className={styles.heading}>{heading}</h6>
        <p className={styles.detail}>
          {text}
        </p>
      </div>
    </a>
  </div>
);

export default Card;
