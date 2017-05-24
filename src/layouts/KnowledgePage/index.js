/* @flow */

import React from 'react';

import Topics from 'components/Topics';

import Page from '../Page';

type PropsType = {
  head: Object,
};

const KnowledgePage = (props: PropsType) => (
  <Page {...props}>
    <div>
      <Topics />
    </div>
  </Page>
);

export default KnowledgePage;
