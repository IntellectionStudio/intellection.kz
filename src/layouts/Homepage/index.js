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
    <div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {props.head.startupsSection.title}
        </h1>
        <p className={styles.text}>
          {props.head.startupsSection.text}
        </p>
      </div>
      {Object.entries(
        props.head.startupsSection.startups,
      ).map(([key, startup]) => <StartupCard key={key} {...startup} />)}
    </div>
  </Page>
);

export default Homepage;
