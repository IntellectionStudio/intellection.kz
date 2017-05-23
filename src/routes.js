/* @flow */

import React from 'react';
import {Route} from 'react-router';
import {PageContainer as PhenomicPageContainer} from 'phenomic';

import AppContainer from './AppContainer';
import Page from './layouts/Page';
import ErrorPage from './layouts/ErrorPage';
import HomePage from './layouts/HomePage';
import About from './layouts/About';
import Startups from './layouts/Startups';
import Post from './layouts/Post';

type PageContainerOwnPropsType = {||};

const PageContainer = (props: PageContainerOwnPropsType) => (
  <PhenomicPageContainer
    {...props}
    layouts={{
      Page,
      ErrorPage,
      HomePage,
      About,
      Startups,
      Post,
    }}
  />
);

const Routes = () => (
  <Route component={AppContainer}>
    <Route path="*" component={PageContainer} />
  </Route>
);

export default Routes;
