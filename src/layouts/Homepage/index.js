/* @flow */

import React from 'react';

import LatestPosts from 'components/LatestPosts';
import Page from 'layouts/Page';

type PropsType = {
  head: Object,
};

const Homepage = (props: PropsType) => (
  <Page {...props}>
    <LatestPosts />
  </Page>
);

export default Homepage;
