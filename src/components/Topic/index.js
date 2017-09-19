import React from 'react';
import {pure} from 'recompact';

import styles from './index.css';

const Topic = ({title}) => (
  <div className={styles.wrapper}>
    <div className={styles.title}>{title}</div>
  </div>
);

export default pure(Topic);
