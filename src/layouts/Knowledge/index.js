/* @flow */

import React from 'react';

import Topics from 'components/Topics';

import Page from '../Page';
// import styles from './index.css'; className={styles.container}

const Knowledge = props => (
  <Page {...props}>
    <div>
      <Topics />
    </div>
  </Page>
);

export default Knowledge;
