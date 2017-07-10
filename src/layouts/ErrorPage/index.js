import React from 'react';
import {pure} from 'recompact';

import Page from 'layouts/Page';

import styles from './index.css';

const STATUS_CODE_NOT_FOUND = 404;

const ErrorPage = ({
  error = STATUS_CODE_NOT_FOUND,
  errorText = 'Page Not Found',
  ...restProps
}) => {
  const pageProps = Page.pickPageProps(restProps);

  return (
    <Page
      {...{
        ...pageProps,
        head: {
          ...pageProps.head,
          hero:
            'https://farm8.staticflickr.com/7559/16101654539_bee5151340_k.jpg',
        },
      }}
    >
      <div className={styles.container}>
        <div className={styles.oops}>
          {'😱 Oooops!'}
        </div>
        <div className={styles.text}>
          <p className={styles.title}>
            <strong>{error}</strong> {errorText}
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
};

export default pure(ErrorPage);
