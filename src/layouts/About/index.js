/* @flow */

import React from 'react';

import Page from 'layouts/Page';

// import styles from './index.css';

type PropsType = {
  head: Object,
};

const Homepage = (props: PropsType) => (
  <Page {...props}>
    About
  </Page>
);

export default Homepage;
