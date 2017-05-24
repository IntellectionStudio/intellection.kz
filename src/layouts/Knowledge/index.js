/* @flow */
import React from 'react';

import Page from '../Page';
import styles from './index.css';
import LatestPosts from '../../components/LatestPosts';

const Knowledge = props =>
  console.log(props) ||
  <Page {...props}>
    <div className={styles.knowledge}>
      <LatestPosts />
    </div>
  </Page>;

export default Knowledge;
