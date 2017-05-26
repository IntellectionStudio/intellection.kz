import {joinUri} from 'phenomic';
import {pick} from 'ramda';
import Helmet from 'react-helmet';
import React, {PropTypes} from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';

import styles from './index.css';

const Page = ({__url, head, footer, children}, {metadata: {pkg}}) => {
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
      <Helmet title={head.title} meta={meta} />
      <div className={styles.wrapper}>
        <Header white={__url !== '/'} />
        {children}
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
