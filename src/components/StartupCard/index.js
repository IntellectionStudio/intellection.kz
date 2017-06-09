import {pure} from 'recompact';
import React from 'react';

import styles from './index.css';

const StartupCard = ({startupCard: {image, text, title}}) => (
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

export default pure(StartupCard);
