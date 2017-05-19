/* @flow */

import React from 'react';
import {Link} from 'phenomic';
import {mapObjIndexed, values} from 'ramda';

import Page from 'layouts/Page';
import HeroVideo from 'components/HeroVideo';
import Card from 'components/Card';
import StartupCard from 'components/StartupCard';

import styles from './index.css';

type PropsType = {
  head: Object,
};

const renderCard = (card, key) => <Card key={key} {...card} />;
const renderStartupCard = (startup, key) => (
  <StartupCard key={key} {...startup} />
);
const mapVal = (fn, obj) => values(mapObjIndexed(fn, obj));

const Homepage = (props: PropsType) => (
  <Page {...props}>
    <div className={styles.hero}>
      <HeroVideo {...props.head.hero.video} />
      <div className={styles.cards}>
        {mapVal(renderCard, props.head.hero.cards)}
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
        {mapVal(renderStartupCard, props.head.startupsSection.startups)}
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
