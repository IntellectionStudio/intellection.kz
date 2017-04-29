/* @flow */

import React from 'react';

import Page from 'layouts/Page';
import BackgroundVideo from 'components/BackgroundVideo';
import Card from 'components/Card';

import styles from './index.css';

type PropsType = {
  head: Object,
};

const Homepage = (props: PropsType) => (
  <Page {...props}>
    <BackgroundVideo />
    <div className={styles.additionalServices}>
      <Card />
      <Card />
      <Card />
    </div>
  </Page>
);

export default Homepage;
