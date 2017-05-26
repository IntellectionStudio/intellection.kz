import React from 'react';

import Posts from 'components/Posts';

import Page from '../Page';

const TopicPage = props => (
  <Page {...props}>
    <div>
      <Posts topic={props.head.id} />
    </div>
  </Page>
);

export default TopicPage;
