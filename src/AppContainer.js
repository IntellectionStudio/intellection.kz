import {IntlProvider} from 'react-intl';
import React from 'react';

import {Container, Content, DefaultHeadMeta} from 'components';
import getIntlForLocale from 'utils/getIntlForLocale';

import 'normalize.css/normalize.css';
import 'react-modal-video/scss/modal-video.scss';
import './index.global.css';
import './highlight.global.css';

/* eslint-disable */
// GOOGLE Analytics, part 1/2
const GOOGLE_ANALYTICS_UA = 'UA-73008937-1';
if (typeof window !== 'undefined') {
  window.ga = window.ga || function () { (ga.q = ga.q || []).push(arguments) }; ga.l = +new Date;
  ga('create', GOOGLE_ANALYTICS_UA, 'auto');

  ga('require', 'cleanUrlTracker');
  ga('require', 'eventTracker');
  ga('require', 'impressionTracker');
  ga('require', 'maxScrollTracker');
  ga('require', 'mediaQueryTracker');
  ga('require', 'outboundFormTracker');
  ga('require', 'outboundLinkTracker');
  ga('require', 'pageVisibilityTracker');
  ga('require', 'urlChangeTracker');

  ga('send', 'pageview');
}
/* eslint-enable */

const AppContainer = ({location: {query}, children}) => {
  const intlConfig = getIntlForLocale(query.locale);

  return (
    <IntlProvider {...intlConfig}>
      <Container>
        <DefaultHeadMeta
          scripts={[
            // GOOGLE Analytics, part 2/2
            {async: true, src: 'https://www.google-analytics.com/analytics.js'},
            {
              async: true,
              src:
                'https://cdnjs.cloudflare.com/ajax/libs/autotrack/2.4.1/autotrack.js',
            },
          ]}
        />
        <Content>
          {children}
        </Content>
      </Container>
    </IntlProvider>
  );
};

export default AppContainer;
