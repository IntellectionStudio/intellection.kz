/* @flow */

import React from 'react';

import styles from './index.css';

type PropsType = {|
  children?: React$Element<any>,
|};

const Container = ({children}: PropsType) => (
  <div className={styles.container}>
    {children}
  </div>
);

export default Container;
