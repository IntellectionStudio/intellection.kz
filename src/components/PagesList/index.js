/* @flow */

import React from 'react';

import type {PostType} from 'types';

import PagePreview from '../PagePreview';
import styles from './index.css';

type PropsType = {|
  pages: Array<PostType>,
|};

const PagesList = ({pages}: PropsType) => (
  <div>
    {pages.length
      ? <ul className={styles.list}>
          {pages.map((page: PostType) => (
            <li key={page.title}><PagePreview {...page} /></li>
          ))}
        </ul>
      : 'No posts yet.'}
  </div>
);

export default PagesList;
