import React from 'react';

import {Card, HeroVideo} from 'components';
import mapValues from 'utils/mapValues';
import Page from 'layouts/Page';

import styles from './index.css';

const renderCard = card =>
  <Card key={`${card.title}-${card.text}`} card={card} />;

const HomePage = props =>
  <Page {...Page.pickPageProps(props)}>
    <div className={styles.hero}>
      <HeroVideo {...props.head.hero.video} />
      <div className={styles.cards}>
        {mapValues(renderCard)(props.head.hero.cards)}
      </div>
    </div>
  </Page>;

export default HomePage;
