import {IntlProvider} from 'react-intl';
import React from 'react';

import {Container, Content, DefaultHeadMeta} from 'components';
import getIntlForLocale from 'utils/getIntlForLocale';

import 'normalize.css/normalize.css';
import 'react-modal-video/scss/modal-video.scss';
import './index.global.css';
import './highlight.global.css';

// require('babel-polyfill');

const AppContainer = ({location: {query}, children}) => {
  console.log(JSON.stringify(query));
  const intlConfig = getIntlForLocale(query.locale);

  return (
    <IntlProvider {...intlConfig}>
      <Container>
        <DefaultHeadMeta />
        <Content>
          {children}
        </Content>
      </Container>
    </IntlProvider>
  );
};

export default AppContainer;
