/* @flow */

import enhanceCollection from 'phenomic/lib/enhance-collection';
import React, {PropTypes} from 'react';

import styles from './index.css';

type PropsType = {|
  topic: string,
|};

type ContextType = {|
  collection: Array<PostType>,
|};

const Posts = ({topic}: PropsType, {collection}: ContextType) => {
  const posts = enhanceCollection(collection, {
    filter: {topic},
  });

  return (
    <div>
      {posts.length
        ? <ul className={styles.list}>
            {posts.map((post: PostType) => (
              <div key={post.title}>{post.title}</div>
            ))}
          </ul>
        : 'No posts yet.'}
    </div>
  );
};

Posts.contextTypes = {
  collection: PropTypes.array.isRequired,
};

export default Posts;
