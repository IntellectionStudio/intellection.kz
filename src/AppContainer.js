/* @flow */

import {IntlProvider} from 'react-intl';
import React from 'react';

import Container from 'components/Container';
import Content from 'components/Content';
import DefaultHeadMeta from 'components/DefaultHeadMeta';
import Footer from 'components/Footer';
import getIntlForLocale from 'utils/getIntlForLocale';

import 'normalize.css/normalize.css';
// $FlowFixMe
import 'react-modal-video/scss/modal-video.scss';
import './index.global.css';
import './highlight.global.css';

type AppContainerOwnPropsType = {|
  location: {
    query: Object,
  },
  children?: React$Element<any>,
|};

const AppContainer = ({
  location: {query},
  children,
}: AppContainerOwnPropsType) => {
  const intlConfig = getIntlForLocale(query.locale);

  return (
    <IntlProvider {...intlConfig}>
      <Container>
        <DefaultHeadMeta />
        <Content>
          {children}
        </Content>
        <Footer />
      </Container>
    </IntlProvider>
  );
};

export default AppContainer;
