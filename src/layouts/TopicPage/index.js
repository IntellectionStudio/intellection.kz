/* @flow */

import React from 'react';

import Posts from 'components/Posts';

import Page from '../Page';

// import styles from './index.css'; className={styles.container}

type PropsType = {|
  head: Object,
|};

const TopicPage = (props: PropsType) => (
  <Page {...props}>
    <div>
      <Posts topic={props.head.id} />
    </div>
  </Page>
);

export default TopicPage;
