/* @flow */

import React from 'react';

import styles from './index.css';

const StartupCard = () => (
  <div className={styles.container}>
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        src="http://is2.mzstatic.com/image/thumb/Purple111/v4/d4/e3/cf/d4e3cf6b-bdb0-26c0-8553-4683955968a2/source/175x175bb.jpg"
        alt="Qazaq App"
      />
    </div>
    <div className={styles.info}>
      <h2 className={styles.title}>Qazaq App</h2>
      <p className={styles.description}>
        Приложение по изучению казахского языка
      </p>
    </div>
  </div>
);

export default StartupCard;
