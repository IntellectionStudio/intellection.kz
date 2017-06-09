import {pure} from 'recompact';
import React from 'react';

import styles from './index.css';

const Content = ({children}) =>
  <div className={styles.content}>
    {children}
  </div>;

const EnhancedContent = pure(Content);

export default EnhancedContent;
