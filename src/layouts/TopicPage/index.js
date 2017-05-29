import React from 'react';

import Questions from 'components/Questions';

import Page from '../Page';
import styles from './index.css';

const TopicPage = props => (
  <Page {...props}>
    <div className={styles.path}>
      <div>Knowledge Base</div>
      <div className={styles.gt}>&gt;</div>
      <div className={styles.pathColored}>{props.head.title}</div>
    </div>
    <div className={styles.questions}>
      <Questions topic={props.head.id} />
    </div>
  </Page>
);

export default TopicPage;
