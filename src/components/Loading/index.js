import {pure} from 'recompact';
import Helmet from 'react-helmet';
import React from 'react';
import TopBarProgressIndicator from 'react-topbar-progress-indicator';

import styles from './index.css';

TopBarProgressIndicator.config({
  barColors: {
    '0': '#fff',
    '1.0': '#fff',
  },
  shadowBlur: 5,
});

const Loading = () => (
  <div>
    <Helmet title={'Loading...'} />
    <TopBarProgressIndicator />
    <div className={styles.loader}>
      <div className={styles.spinner} />
    </div>
  </div>
);

export default pure(Loading);
