import React from 'react';

import LatestPosts from '../../components/LatestPosts';
import Page from '../Page';

const Homepage = props => (
  <Page {...props}>
    <LatestPosts />
  </Page>
);

export default Homepage;
