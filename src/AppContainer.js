/* eslint-disable */

import { IntlProvider } from 'react-intl';
import React from 'react';

import { Container, Content, DefaultHeadMeta } from 'components';
import getIntlForLocale from 'utils/getIntlForLocale';

import 'normalize.css/normalize.css';
import 'react-modal-video/scss/modal-video.scss';
import './index.global.css';
import './highlight.global.css';

// GOOGLE Analytics, part 1/2
const GOOGLE_ANALYTICS_UA = 'UA-73008937-1';
if (typeof window !== 'undefined') {
  window.ga =
    window.ga ||
    function () {
      (ga.q = ga.q || []).push(arguments);
    };
  ga.l = Number(new Date()); // eslint-disable-line no-explicit-coercion
  // ga comes from google-analytics script injected below
  ga('create', GOOGLE_ANALYTICS_UA, 'auto');

  // autotrack
  // https://github.com/googleanalytics/autotrack

  // most important plugin for phenomic
  require('autotrack/lib/plugins/url-change-tracker');
  ga('require', 'urlChangeTracker');

  // some plugins you might like
  require('autotrack/lib/plugins/clean-url-tracker');
  ga('require', 'cleanUrlTracker');
  require('autotrack/lib/plugins/outbound-form-tracker');
  ga('require', 'outboundFormTracker');
  require('autotrack/lib/plugins/outbound-link-tracker');
  ga('require', 'outboundLinkTracker');

  // check out more here https://github.com/googleanalytics/autotrack#plugins

  // now that everything is ready, log initial page
  ga('send', 'pageview');
  console.log('pageview');
}

const AppContainer = ({ location: { query }, children }) => {
  console.log(JSON.stringify(query));
  const intlConfig = getIntlForLocale(query.locale);

  return (
    <IntlProvider {...intlConfig}>
      <Container>
        <DefaultHeadMeta
          scripts={[
            // GOOGLE Analytics, part 2/2
            { async: true, src: 'https://www.google-analytics.com/analytics.js' },
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
