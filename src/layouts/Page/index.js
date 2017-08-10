import {joinUri} from 'phenomic';
import {pick} from 'ramda';
import Helmet from 'react-helmet';
import React from 'react';
import PropTypes from 'prop-types';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Loading from 'components/Loading';

import styles from './index.css';

const Page = (
  {__url, head, footer, children, isLoading},
  {metadata: {pkg}},
) => {
  const meta = [
    {property: 'og:type', content: 'article'},
    {property: 'og:title', content: head.title},
    {
      property: 'og:url',
      content: joinUri(process.env.PHENOMIC_USER_URL, __url),
    },
    // {property: 'og:image', content: socialImage},
    {property: 'og:description', content: head.description},
    {name: 'twitter:card', content: 'summary'},
    {name: 'twitter:title', content: head.title},
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
      <Helmet title={head.title} meta={meta}>
        <link
          rel="shortcut-icon"
          type="image/x-icon"
          href="/assets/icons/favicon.ico"
        />
      </Helmet>
      <div className={styles.wrapper}>
        <Header white={__url !== '/'} />
        {isLoading ? <Loading /> : children}
        <Footer homepage={__url === '/'} />
      </div>
    </div>
  );
};

Page.pickPageProps = props =>
  pick(['__filename', '__url', 'head'])({
    ...props,
    head: pick(['title', 'footer', 'children'])(props.head),
  });

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default Page;
