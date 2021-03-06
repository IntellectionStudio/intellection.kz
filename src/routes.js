import {PageContainer as PhenomicPageContainer} from 'phenomic';
import {Route} from 'react-router';
import React from 'react';

import AboutPage from 'layouts/AboutPage';
import ContactPage from 'layouts/ContactPage';
import CoursesPage from 'layouts/CoursesPage';
import ErrorPage from 'layouts/ErrorPage';
import HomePage from 'layouts/HomePage';
import KnowledgePage from 'layouts/KnowledgePage';
import Page from 'layouts/Page';
import StartupsPage from 'layouts/StartupsPage';
import ServicesPage from 'layouts/ServicesPage';
import TopicPage from 'layouts/TopicPage';

import AppContainer from './AppContainer';

const PageContainer = props => (
  <PhenomicPageContainer
    {...props}
    layouts={{
      AboutPage,
      ContactPage,
      CoursesPage,
      ErrorPage,
      HomePage,
      KnowledgePage,
      Page,
      StartupsPage,
      ServicesPage,
      TopicPage,
    }}
  />
);

const Routes = (
  <Route component={AppContainer}>
    <Route path="*" component={PageContainer} />
  </Route>
);

export default Routes;
