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
      <div className={styles.startup}>
        <div className={styles.startupPicture} />
        <div className={styles.startupInfo}>
          <h2 className={styles.startupTitle}>Qazaq App</h2>
          <p className={styles.startupDescription}>
            Приложение по изучению казахского языка
          </p>
        </div>
      </div>
    </div>
  </Page>
);

export default Homepage;
