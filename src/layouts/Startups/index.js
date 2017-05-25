/* @flow */
import React from 'react';

import Page from 'layouts/Page';
import StartupsHeader from 'components/StartupsHeader';

import styles from './index.css';

type PropsType = {
  head: Object,
};
const Startups = (props: PropsType) => (
  <Page {...props}>
    <div className={styles.container}>
      <StartupsHeader {...props} />
    </div>
  </Page>
);

export default Startups;
