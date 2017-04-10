/* @flow */

import React from 'react';

import LatestPosts from 'components/LatestPosts';
import Page from 'layouts/Page';

const Homepage = (props: Object) => (
  <Page {...props}>
    <LatestPosts />
  </Page>
);

export default Homepage;
