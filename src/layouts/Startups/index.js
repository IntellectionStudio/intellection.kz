/* @flow */

import React from 'react';

import Page from 'layouts/Page';

import styles from './index.css';

type PropsType = {
  head: Object,
};

const Homepage = (props: PropsType) => (
  <Page {...props}>
    <div className={styles.container}>
      Our Startups
    </div>
  </Page>
);

export default Homepage;
