import React from 'react';

import {Posts} from 'components';
import Page from 'layouts/Page';

const TopicPage = props => (
  <Page {...props}>
    <div>
      <Posts topic={props.head.id} />
    </div>
  </Page>
);

export default TopicPage;
