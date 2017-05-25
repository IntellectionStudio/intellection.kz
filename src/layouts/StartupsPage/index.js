/* @flow */

import React from 'react';

import Page from 'layouts/Page';
import StartupsHeader from 'components/StartupsHeader';

import styles from './index.css';

type StartupsPageOwnPropsType = PhenomicPagePropsType;
const StartupsPage = (props: StartupsPageOwnPropsType) => (
  <Page {...props}>
    <div className={styles.container}>
      <StartupsHeader {...props} />
    </div>
  </Page>
);

export default StartupsPage;
