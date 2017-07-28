import {IntlProvider} from 'react-intl';
import React from 'react';
import 'autotrack';
import 'autotrack/lib/plugins/event-tracker';
import 'autotrack/lib/plugins/outbound-link-tracker';
import 'autotrack/lib/plugins/url-change-tracker';

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
  ga('create', GOOGLE_ANALYTICS_UA, 'auto');

  ga('require', 'eventTracker');
  ga('require', 'outboundLinkTracker');
  ga('require', 'urlChangeTracker');

  ga('send', 'pageview');
}
/* eslint-enable */

const AppContainer = ({location: {query}, children}) => {
  console.log(JSON.stringify(query));
  const intlConfig = getIntlForLocale(query.locale);

  return (
    <IntlProvider {...intlConfig}>
      <Container>
        <DefaultHeadMeta
          scripts={[
            // GOOGLE Analytics, part 2/2
            {async: true, src: 'https://www.google-analytics.com/analytics.js'},
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
