/* @flow */

import {Link} from 'phenomic';
import React from 'react';

import type {PostType} from 'types';

import styles from './index.css';

type PropsType = PostType & {};

const Topic = ({__url, title}: PropsType) => (
  <div className={styles.wrapper}>
    <Link to={__url} className={styles.title}>
      {title}
    </Link>
  </div>
);

export default Topic;
