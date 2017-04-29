/* @flow */

import React from 'react';

import Page from 'layouts/Page';
import HeroVideo from 'components/HeroVideo';
import Card from 'components/Card';

import styles from './index.css';

type PropsType = {
  head: Object,
};

const Homepage = (props: PropsType) => (
  <Page {...props}>
    <HeroVideo />
    <div className={styles.additionalServices}>
      <Card />
      <Card />
      <Card />
    </div>
  </Page>
);

export default Homepage;
