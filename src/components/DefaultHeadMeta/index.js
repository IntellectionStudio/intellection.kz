import {pure} from 'recompact';
import Helmet from 'react-helmet';
import React from 'react';
import PropTypes from 'prop-types';

const DefaultHeadMeta = ({meta, scripts}, {metadata: {pkg}}) => (
  <div hidden>
    <Helmet
      meta={[
        {
          name: 'generator',
          content: `${process.env.PHENOMIC_NAME || ''} ${process.env.PHENOMIC_VERSION || ''}`,
        },
        {property: 'og:site_name', content: pkg.name},
        {
          name: 'twitter:site',
          content: `@${pkg.twitter}`,
        },
        ...(meta || []),
      ]}
      script={[
        {
          src: 'https://cdn.polyfill.io/v2/polyfill.min.js' +
            '?features=es6&flags=gated',
        },
        ...(scripts || []),
      ]}
    />

    {/* meta viewport safari/chrome/edge */}
    <Helmet
      meta={[
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ]}
    />
    <style>{'@-ms-viewport { width: device-width; }'}</style>
  </div>
);

DefaultHeadMeta.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default pure(DefaultHeadMeta);
