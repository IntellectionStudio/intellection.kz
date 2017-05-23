/* @flow */

import {pure} from 'recompact';
import React from 'react';

import Page from 'layouts/Page';

import styles from './index.css';

const ERROR_NOT_FOUND_CODE = 404;

type ErrorPageOwnPropsType = {
  error?: number | string,
  errorText?: string,
};

const ErrorPage = (
  // $FlowFixMe
  {error = ERROR_NOT_FOUND_CODE, errorText = 'Page Not Found'}: PropsType,
) => (
  <Page
    head={{
      // hero credit: https://www.flickr.com/photos/mypubliclands/16101654539/
      hero: 'https://farm8.staticflickr.com/7559/16101654539_bee5151340_k.jpg',
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
        {error === ERROR_NOT_FOUND_CODE &&
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

const EnhancedErrorPage: EnhancedComponentType<ErrorPageOwnPropsType> = pure(
  ErrorPage,
);

export default EnhancedErrorPage;
