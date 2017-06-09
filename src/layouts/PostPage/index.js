import React from 'react';
import {pure} from 'recompact';

import Page from 'layouts/Page';

const PostPage = props => <Page {...Page.pickPageProps(props)} />;

export default pure(PostPage);
