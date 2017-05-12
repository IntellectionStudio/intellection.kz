/* @flow */

import React from 'react';
import {Link} from 'phenomic';

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
        {Object.entries(props.head.hero.cards).map(([key, card]) => (
          <Card key={key} {...card} />
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
      <div className={styles.startups}>
        {Object.entries(
          props.head.startupsSection.startups,
        ).map(([key, startup]) => <StartupCard key={key} {...startup} />)}
      </div>
      <div className={styles.buttonContainer}>
        <Link className={styles.button} to="startups">
          {props.head.startupsSection.buttonText}
        </Link>
      </div>
    </div>
  </Page>
);

export default Homepage;
