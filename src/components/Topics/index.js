import enhanceCollection from 'phenomic/lib/enhance-collection';
import React, {PropTypes} from 'react';
import {Link} from 'phenomic';

import Topic from '../Topic';
import styles from './index.css';

const Topics = (props, {collection}) => {
  const topics = enhanceCollection(collection, {
    filter: {layout: 'TopicPage'},
  });

  return (
    <div className={styles.mainDiv}>
      <div className={styles.hero}>
        <div className={styles.heroTextWrapper}>
          <h1 className={styles.heroTitle}>
            Knowledge Base
          </h1>
          <p className={styles.heroText}>
            They waited till midnight; but no change took place among the guards, and it became apparent that their yielding to sleep could not be counted on.
          </p>
        </div>
      </div>
      <div>
        {topics.length
          ? <div className={styles.featuredTopics}>
              {topics.filter(topic => topic.featured).map(topic => (
                <Link key={topic.title} to={topic.__url}>
                  <div className={styles.featuredTopic}>
                    <div className={styles.featuredTopicImage} />
                    <Topic {...topic} />
                  </div>
                </Link>
              ))}
            </div>
          : 'No posts yet.'}
      </div>
      <div className={styles.knowledgeTopicTableFrame}>
        {topics.length
          ? <div className={styles.knowledgeTopicTable}>
              {topics.map(topic => (
                <Link key={topic.title} to={topic.__url}>
                  <div className={styles.cellSquare}>
                    <img
                      className={styles.cellImage}
                      src="/assets/videoPlaceholder.png"
                      alt="vrh"
                    />
                    <div className={styles.textWrapper}>
                      <h4 className={styles.cellTitle}>{topic.title}</h4>
                      <p className={styles.cellText}>
                        {topic.about}
                      </p>
                    </div>
                    <button className={styles.button}>ПОДРОБНЕЕ</button>
                  </div>
                </Link>
              ))}
            </div>
          : 'No posts yet.'}
      </div>
    </div>
  );
};

Topics.contextTypes = {
  collection: PropTypes.array.isRequired,
};

export default Topics;
