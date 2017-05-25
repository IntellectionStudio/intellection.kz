/* @flow */

import {pure} from 'recompact';
import React from 'react';

import styles from './index.css';

type ContentOwnPropsType = {|
  children?: React$Element<any>,
|};

const Content = ({children}) => (
  <div className={styles.content}>
    {children}
  </div>
);

const EnhancedContent: EnhancedComponentType<ContentOwnPropsType> = pure(
  Content,
);

export default EnhancedContent;
