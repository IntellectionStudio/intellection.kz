import {pure} from 'recompact';
import React from 'react';

import styles from './index.css';

const CardContainer = ({children}) => (
  <div className={styles.container}>
    {children}
  </div>
);

export default pure(CardContainer);