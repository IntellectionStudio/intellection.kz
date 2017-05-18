/* @flow */

import React from 'react';
import {Route} from 'react-router';
import {PageContainer as PhenomicPageContainer} from 'phenomic';

import AppContainer from './AppContainer';
import Page from './layouts/Page';
import PageError from './layouts/PageError';
import Homepage from './layouts/Homepage';
import About from './layouts/About';
import Startups from './layouts/Startups';
import Post from './layouts/Post';

const PageContainer = (props: Object) => (
  <PhenomicPageContainer
    {...props}
    layouts={{
      Page,
      PageError,
      Homepage,
      About,
      Startups,
      Post,
    }}
  />
);

export default (
  <Route component={AppContainer}>
    <Route path="*" component={PageContainer} />
  </Route>
);
