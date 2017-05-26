import {IntlProvider} from 'react-intl';
import React from 'react';

import Container from 'components/Container';
import Content from 'components/Content';
import DefaultHeadMeta from 'components/DefaultHeadMeta';
import getIntlForLocale from 'utils/getIntlForLocale';

import 'normalize.css/normalize.css';
import 'react-modal-video/scss/modal-video.scss';
import './index.global.css';
import './highlight.global.css';

const AppContainer = ({location: {query}, children}) => {
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
