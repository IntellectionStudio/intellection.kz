import {pure} from 'recompact';
import React from 'react';

import styles from './index.css';

const Container = ({children}) =>
  <div className={styles.container}>
    {children}
  </div>;

const EnhancedContainer = pure(Container);

export default EnhancedContainer;
