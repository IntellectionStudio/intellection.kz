/* @flow */

import {Link} from 'phenomic';
import React from 'react';

import type {PostType} from 'types';

import Button from '../../components/Button';
import styles from './index.css';

type PropsType = PostType & {};

const PagePreview = ({__url, title, date, description}: PropsType) => {
  const pageDate = date ? new Date(date) : null;

  return (
    <div className={styles.wrapper}>
      <Link to={__url} className={styles.title}>
        {title}
      </Link>
      <div className={styles.meta}>
        {pageDate &&
          <time key={pageDate.toISOString()}>
            {pageDate.toDateString()}
          </time>}
      </div>
      <div className={styles.description}>
        {description}
        {' '}
      </div>
      <Link to={__url} className={styles.readMore}>
        <Button secondary>{'Read More →'}</Button>
      </Link>
    </div>
  );
};

export default PagePreview;
