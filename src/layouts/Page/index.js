/* @flow */

import {joinUri} from 'phenomic';
import {pure} from 'recompact';
import Helmet from 'react-helmet';
import React, {PropTypes} from 'react';
import warning from 'warning';

import Header from 'components/Header';

import styles from './index.css';

type PageOwnPropsType = {|
  __filename?: string,
  __url?: string,
  isLoading?: boolean,
  head: Object,
  body?: string,
  header?: React$Element<any>,
  footer?: React$Element<any>,
  children?: React$Element<any>,
|};

const Page = (
  {isLoading, __filename, __url, head, body, header, footer, children},
  {metadata: {pkg}}: $FlowFixMe,
) => {
  warning(
    typeof head.title === 'string',
    `Your page '${__filename || ''}' needs a title`,
  );

  const metaTitle = head.metaTitle ? head.metaTitle : head.title;

  // const socialImage = head.hero && head.hero.match('://')
  //   ? head.hero
  //   : joinUri(process.env.PHENOMIC_USER_URL, head.hero);

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

const EnhancedPage: EnhancedComponentType<PageOwnPropsType> = pure(Page);

export default EnhancedPage;
