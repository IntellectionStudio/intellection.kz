import React from 'react';
import {pure} from 'recompact';

import {Topics} from 'components';

import Page from '../Page';

const KnowledgePage = props =>
  <Page {...props}>
    <div>
      <Topics />
    </div>
  </Page>;

export default pure(KnowledgePage);
