/* @flow */

import React from 'react';

import Topics from 'components/Topics';

import Page from '../Page';

type PropsType = {
  head: Object,
};

const Knowledge = (props: PropsType) => (
  <Page {...props}>
    <div>
      <Topics />
    </div>
  </Page>
);

export default Knowledge;
