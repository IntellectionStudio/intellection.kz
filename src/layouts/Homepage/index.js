/* @flow */

import React from 'react';

import Page from 'layouts/Page';
import BackgroundVideo from 'components/BackgroundVideo';

type PropsType = {
  head: Object,
};

const Homepage = (props: PropsType) => (
  <Page {...props}>
    <BackgroundVideo />
  </Page>
);

export default Homepage;
