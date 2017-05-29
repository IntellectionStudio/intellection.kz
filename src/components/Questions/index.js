import enhanceCollection from 'phenomic/lib/enhance-collection';
import React, {PropTypes} from 'react';

import styles from './index.css';

const Questions = ({topic}, {collection}) => {
  const posts = enhanceCollection(collection, {
    filter: {subject: topic},
  });

  const title = enhanceCollection(collection, {
    filter: {id: topic},
  });

  let int = 0;

  return (
    <div>
      <div>
        {title.length
          ? <ul className={styles.bigTitle}>
              {title.map(subject => (
                <div key={subject.title}>
                  {subject.title}
                </div>
              ))}
            </ul>
          : 'No posts yet.'}
      </div>
      {posts.length
        ? <ul className={styles.list}>
            {posts.map(post => (
              <div key={post.questionWrap} className={styles.questionWrap}>
                <ul key={post.numeration} className={styles.numeration}>
                  {(int += 1)}.
                </ul>
                <div key={post.question1} className={styles.wrap}>
                  <div key={post.question} className={styles.question}>
                    {post.question}
                  </div>
                  <div key={post.question2} className={styles.numberOfItems}>
                    {posts.length} items
                  </div>
                </div>
              </div>
            ))}
          </ul>
        : 'No posts yet.'}
    </div>
  );
};

Questions.contextTypes = {
  collection: PropTypes.array.isRequired,
};

export default Questions;
