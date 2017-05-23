/* @flow */

import {Link} from 'phenomic';
import React from 'react';

import styles from './index.css';

type PropsType = {|
  __url: string,
  title: string,
|};

const Topic = ({__url, title}: PropsType) => (
  <div className={styles.wrapper}>
    <Link to={__url} className={styles.title}>
      {title}
    </Link>
  </div>
);

export default Topic;
