/* @flow */

import {IntlProvider} from 'react-intl';
import React from 'react';

import Container from 'components/Container';
import Content from 'components/Content';
import DefaultHeadMeta from 'components/DefaultHeadMeta';
import Footer from 'components/Footer';
import getIntlForLocale from 'utils/getIntlForLocale';
import Header from 'components/Header';

import 'normalize.css/normalize.css';
import './index.global.css';
import './highlight.global.css';

type PropsType = {
  children?: React$Element<any>,
  location: {
    query: Object,
  },
};

const AppContainer = ({location: {query}, children}: PropsType) => {
  const intlConfig = getIntlForLocale(query.locale);

  return (
    <IntlProvider {...intlConfig}>
      <Container>
        <DefaultHeadMeta />
        <Header />
        <Content>
          {children}
        </Content>
        <Footer />
      </Container>
    </IntlProvider>
  );
};

export default AppContainer;
