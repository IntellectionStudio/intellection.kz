/* @flow */

import {pure} from 'recompact';
import React from 'react';

import Page from 'layouts/Page';

import styles from './index.css';

type PostOwnPropsType = {|
  head: Object,
|};

const Post = props => {
  // it's up to you to choose what to do with this layout ;)
  const pageDate = props.head.date ? new Date(props.head.date) : null;

  return (
    <Page
      {...props}
      header={
        <div>
          <header className={styles.header}>
            {pageDate &&
              <time key={pageDate.toISOString()}>
                {pageDate.toDateString()}
              </time>}
          </header>
        </div>
      }
    />
  );
};

const EnhancedPost: EnhancedComponentType<PostOwnPropsType> = pure(Post);

export default EnhancedPost;
