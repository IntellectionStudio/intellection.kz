/* @flow */

import enhanceCollection from 'phenomic/lib/enhance-collection';
import React, {PropTypes} from 'react';
import {Link} from 'phenomic';

import Topic from '../Topic';
import styles from './index.css';

type PropsType = {||};

type ContextType = {|
  collection: Array<Object>,
|};

const Topics = (props: PropsType, {collection}: ContextType) => {
  const topics = enhanceCollection(collection, {
    filter: {layout: 'TopicPage'},
  });

  return (
    <div>
      <h2 className={styles.latestPosts}>
        {'Choose Topic'}
      </h2>
      <div>
        {topics.length
          ? <ul className={styles.list}>
              {topics.map(topic => (
                <Link key={topic.title} to={topic.__url}>
                  <Topic {...topic} />
                </Link>
              ))}
            </ul>
          : 'No posts yet.'}
      </div>
    </div>
  );
};

Topics.contextTypes = {
  collection: PropTypes.array.isRequired,
};

export default Topics;
