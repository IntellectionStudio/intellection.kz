/* @flow */

import React from 'react';

import styles from './index.css';

const Card = () => (
  <div className={styles.root}>
    <a className={styles.container}>
      <img
        className={styles.image}
        src="https://s3-us-west-1.amazonaws.com/udacity-content/modules/module-partner-f8%401x.png"
        alt="Software development process"
      />
      <div>
        <h6 className={styles.heading}>Услуги разработки</h6>
        <p className={styles.detail}>
          I have hinted that I would often jerk poor Queequeg from between.
        </p>
      </div>
    </a>
  </div>
);

export default Card;
