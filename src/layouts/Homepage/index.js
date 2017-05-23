/* @flow */

import React from 'react';
import {mapObjIndexed, values} from 'ramda';

import Page from 'layouts/Page';
import HeroVideo from 'components/HeroVideo';
import Card from 'components/Card';

import styles from './index.css';

type PropsType = {
  head: Object,
};

const renderCard = (card, key) => <Card key={key} {...card} />;
const mapVal = (fn, obj) => values(mapObjIndexed(fn, obj));

const Homepage = (props: PropsType) => (
  <Page {...props}>
    <div className={styles.hero}>
      <HeroVideo {...props.head.hero.video} />
      <div className={styles.cards}>
        {mapVal(renderCard, props.head.hero.cards)}
      </div>
    </div>
  </Page>
);

export default Homepage;
