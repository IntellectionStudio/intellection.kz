/* @flow */

import React from 'react';

import styles from './index.css';

type PropsType = {|
  children?: React$Element<any>,
|};

const Content = ({children}: PropsType) => (
  <div className={styles.content}>
    {children}
  </div>
);

export default Content;
