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
    <div className={styles.hero}>
      <HeroVideo />
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </Page>
);

export default Homepage;
