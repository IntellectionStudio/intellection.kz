/* @flow */

import React from 'react';

import Page from 'layouts/Page';
import HeroVideo from 'components/HeroVideo';
import Card from 'components/Card';
import StartupCard from 'components/StartupCard';

import styles from './index.css';

type PropsType = {
  head: Object,
};

const Homepage = (props: PropsType) => (
  <Page {...props}>
    <div className={styles.hero}>
      <HeroVideo {...props.head.hero.video} />
      <div className={styles.cards}>
        {Object.values(props.head.hero.cards).map(card => (
          <Card key={card.link} {...card} />
        ))}
      </div>
    </div>
    <div className={styles.startupsWrapper}>
      <div className={styles.title}>
        <h1 className={styles.titleHeading}>Наши стартапы</h1>
        <p className={styles.titleDescription}>
          Then going through some small strange motions with it—whether indispensable to the
        </p>
      </div>
      {Object.entries(props.head.startups).map(([key, startup]) => (
        <StartupCard key={key} {...startup} />
      ))}
    </div>
  </Page>
);

export default Homepage;
