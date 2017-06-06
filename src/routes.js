import {PageContainer as PhenomicPageContainer} from 'phenomic';
import {Route} from 'react-router';
import React from 'react';

import AboutPage from 'layouts/AboutPage';
import CoursesPage from 'layouts/CoursesPage';
import ErrorPage from 'layouts/ErrorPage';
import HomePage from 'layouts/HomePage';
import KnowledgePage from 'layouts/KnowledgePage';
import TopicPage from 'layouts/TopicPage';
import Page from 'layouts/Page';
import PostPage from 'layouts/PostPage';
import StartupsPage from 'layouts/StartupsPage';

import AppContainer from './AppContainer';

const PageContainer = props => (
  <PhenomicPageContainer
    {...props}
    layouts={{
      Page,
      ErrorPage,
      AboutPage,
      CoursesPage,
      KnowledgePage,
      HomePage,
      StartupsPage,
      TopicPage,
      PostPage,
    }}
  />
);

const Routes = (
  <Route component={AppContainer}>
    <Route path="*" component={PageContainer} />
  </Route>
);

export default Routes;
