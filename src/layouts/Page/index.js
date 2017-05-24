/* @flow */

import {joinUri} from 'phenomic';
import Helmet from 'react-helmet';
import React, {PropTypes} from 'react';

import Header from 'components/Header';

import styles from './index.css';

type PageOwnPropsType = PhenomicPagePropsType & {
  footer?: React$Element<any>,
  children?: React$Element<any>,
};

const Page = (
  {__filename, __url, head, footer, children}: PageOwnPropsType,
  {metadata: {pkg}}: $FlowFixMe,
) => {
  const metaTitle = head.metaTitle ? head.metaTitle : head.title;

  const meta = [
    {property: 'og:type', content: 'article'},
    {property: 'og:title', content: metaTitle},
    {
      property: 'og:url',
      content: joinUri(process.env.PHENOMIC_USER_URL, __url),
    },
    // {property: 'og:image', content: socialImage},
    {property: 'og:description', content: head.description},
    {name: 'twitter:card', content: 'summary'},
    {name: 'twitter:title', content: metaTitle},
    {
      name: 'twitter:creator',
      content: `@${pkg.twitter}`,
    },
    {name: 'twitter:description', content: head.description},
    // {name: 'twitter:image', content: socialImage},
    {name: 'description', content: head.description},
  ];

  return (
    <div className={styles.page}>
      <Helmet title={metaTitle} meta={meta} />
      <div className={styles.wrapper}>
        <Header white={__url !== '/'} />
        {children}
        {footer}
      </div>
    </div>
  );
};

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default Page;
