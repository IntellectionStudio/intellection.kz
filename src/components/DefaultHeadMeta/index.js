/* @flow */

import Helmet from 'react-helmet';
import React, {PropTypes} from 'react';

type PropsType = {|
  meta?: Array<Object>,
  scripts?: Array<Object>,
|};
type ContextType = {|
  metadata: Phenomic$Metadata,
|};

const DefaultHeadMeta = (
  {meta, scripts}: PropsType,
  {metadata: {pkg}}: ContextType,
) => (
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

export default DefaultHeadMeta;
