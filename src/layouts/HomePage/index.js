/* @flow */

import {Link} from 'phenomic';
import React from 'react';

import Card from 'components/Card';
import HeroVideo from 'components/HeroVideo';
import mapValues from 'utils/mapValues';
import Page from 'layouts/Page';
import StartupCard from 'components/StartupCard';
import type {CardType, StartupCardType} from 'types';

import styles from './index.css';

type HomePageOwnPropsType = {|
  /* :: ...PhenomicPagePropsType, */
  head: {
    hero: {
      cards: {
        +[key: string]: CardType,
      },
    },
    startupsSection: {
      startups: {
        +[key: string]: StartupCardType,
      },
    },
  } & PhenomicPageHeadType,
|};

const renderCard = (card: CardType) => (
  <Card key={`${card.title}-${card.text}`} card={card} />
);
const renderStartupCard = (startupCard: StartupCardType) => (
  <StartupCard
    key={`${startupCard.title}-${startupCard.text}`}
    startupCard={startupCard}
  />
);

const HomePage = (props: HomePageOwnPropsType) => (
  <Page {...Page.pickPageProps(props)}>
    <div className={styles.hero}>
      <HeroVideo {...props.head.hero.video} />
      <div className={styles.cards}>
        {mapValues(renderCard)(props.head.hero.cards)}
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
        {mapValues(renderStartupCard, props.head.startupsSection.startups)}
      </div>
      <div className={styles.buttonContainer}>
        <Link className={styles.button} to="startups">
          {props.head.startupsSection.buttonText}
        </Link>
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
        {mapValues(renderStartupCard)(props.head.startupsSection.startups)}
      </div>
      <div className={styles.buttonContainer}>
        <Link className={styles.button} to="startups">
          {props.head.startupsSection.buttonText}
        </Link>
      </div>
    </div>
  </Page>
);

export default HomePage;
