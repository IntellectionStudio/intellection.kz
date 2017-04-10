/* @flow */

import React from 'react';

import LatestPosts from 'components/LatestPosts';
import Page from 'layouts/Page';

import styles from './index.css';

type PropsType = {|
  head: Object,
|};

const Post = (props: PropsType) => {
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
    >
      <hr />
      <LatestPosts />
    </Page>
  );
};

export default Post;
