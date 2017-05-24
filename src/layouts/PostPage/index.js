/* @flow */

import React from 'react';

import Page from 'layouts/Page';

const PostPage = (props: PhenomicPagePropsType) => (
  <Page {...Page.pickPageProps(props)} />
);

export default PostPage;
