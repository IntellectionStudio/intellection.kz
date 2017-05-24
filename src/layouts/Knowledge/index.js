/* @flow */
import React from 'react';

import Page from '../Page';
import styles from './index.css';

const Knowledge = (props: PhenomicPagePropsType) => (
  <Page {...Page.pickPageProps(props)}>
    <div className={styles.knowledge} />
  </Page>
);

export default Knowledge;
