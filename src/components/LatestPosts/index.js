/* @flow */

import enhanceCollection from 'phenomic/lib/enhance-collection';
import React, {PropTypes} from 'react';

import PagesList from 'components/PagesList';
import type {PostType} from 'types';

import styles from './index.css';

const DEFAULT_NUMBER_OF_POSTS = 6;

type PropsType = {|
  numberOfPosts?: number,
|};
type ContextType = {|
  collection: Array<PostType>,
|};

const LatestPosts = (
  {numberOfPosts = DEFAULT_NUMBER_OF_POSTS}: PropsType,
  {collection}: ContextType,
) => {
  const latestPosts = enhanceCollection(collection, {
    filter: {layout: 'Post'},
    sort: 'date',
    reverse: true,
  }).slice(0, numberOfPosts);

  return (
    <div>
      <h2 className={styles.latestPosts}>
        {'Latest Posts'}
      </h2>
      <PagesList pages={latestPosts} />
    </div>
  );
};

LatestPosts.contextTypes = {
  collection: PropTypes.array.isRequired,
};

export default LatestPosts;
