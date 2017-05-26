import enhanceCollection from 'phenomic/lib/enhance-collection';
import React, {PropTypes} from 'react';

import styles from './index.css';

const Posts = ({topic}, {collection}) => {
  const posts = enhanceCollection(collection, {
    filter: {topic},
  });

  return (
    <div>
      {posts.length
        ? <ul className={styles.list}>
            {posts.map(post => <div key={post.title}>{post.title}</div>)}
          </ul>
        : 'No posts yet.'}
    </div>
  );
};

Posts.contextTypes = {
  collection: PropTypes.array.isRequired,
};

export default Posts;
