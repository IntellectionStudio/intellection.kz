/* @flow */

import React from 'react';

import Page from 'layouts/Page';

import styles from './index.css';

const STATUS_CODE_NOT_FOUND = 404;

type ErrorPageOwnPropsType = {
  error?: number,
  errorText?: string,
} & PhenomicPagePropsType;

const ErrorPage = ({
  error = STATUS_CODE_NOT_FOUND,
  errorText = 'Page Not Found',
  ...pageProps
}: ErrorPageOwnPropsType) => (
  <Page
    {...pageProps}
    head={{
      // hero credit: https://www.flickr.com/photos/mypubliclands/16101654539/
      hero: 'https://farm8.staticflickr.com/7559/16101654539_bee5151340_k.jpg',
      ...pageProps.head,
    }}
  >
    <div className={styles.container}>
      <div className={styles.oops}>{'😱 Oooops!'}</div>
      <div className={styles.text}>
        <p className={styles.title}>
          <strong>{error}</strong>
          {' '}
          {errorText}
        </p>
        {error === STATUS_CODE_NOT_FOUND &&
          <div>
            {'It seems you found a broken link. '}
            {'Sorry about that. '}
            <br />
            {'Do not hesitate to report this page 😁.'}
          </div>}
      </div>
    </div>
  </Page>
);

export default ErrorPage;
