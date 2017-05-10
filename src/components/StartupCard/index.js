/* @flow */

import React from 'react';

import styles from './index.css';

const StartupCard = () => (
  <div className={styles.container}>
    <div className={styles.picture} />
    <div className={styles.info}>
      <h2 className={styles.title}>Qazaq App</h2>
      <p className={styles.description}>
        Приложение по изучению казахского языка
      </p>
    </div>
  </div>
);

export default StartupCard;
