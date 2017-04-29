/* @flow */

import React from 'react';

import styles from './index.css';

const Card = () => (
  <div className={styles.cardWrapper}>
    <a className={styles.card}>
      <img
        className={styles.cardImage}
        src="https://s3-us-west-1.amazonaws.com/udacity-content/modules/module-partner-f8%401x.png"
        alt="Software development process"
      />
      <div className={styles.cardContent}>
        <h6>Услуги разработки</h6>
        <p>
          I have hinted that I would often jerk poor Queequeg from between.
        </p>
      </div>
    </a>
  </div>
);

export default Card;
