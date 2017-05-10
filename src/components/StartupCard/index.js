/* @flow */

import React from 'react';

import styles from './index.css';

type PropsType = {|
  image: string,
  text: string,
  title: string,
|};

const StartupCard = ({image, text, title}: PropsType) => (
  <div className={styles.container}>
    <div className={styles.imageContainer}>
      <img className={styles.image} src={image} alt={title} />
    </div>
    <div className={styles.info}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>
        {text}
      </p>
    </div>
  </div>
);

export default StartupCard;
