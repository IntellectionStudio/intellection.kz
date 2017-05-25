/* @flow */

import React from 'react';

import styles from './index.css';

const Topics = () => (
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
    <div className={styles.featuredTopics}>
      <div className={styles.featuredTopic}>
        <div className={styles.featuredTopicImage} />
        <h3 className={styles.featuredTopicTitle}>Virtual Reality</h3>
      </div>
      <div className={styles.featuredTopic}>
        <div className={styles.featuredTopicImage} />
        <h3 className={styles.featuredTopicTitle}>Virtual Reality</h3>
      </div>
      <div className={styles.featuredTopic}>
        <div className={styles.featuredTopicImage} />
        <h3 className={styles.featuredTopicTitle}>Virtual Reality</h3>
      </div>
      <div className={styles.featuredTopic}>
        <div className={styles.featuredTopicImage} />
        <h3 className={styles.featuredTopicTitle}>Virtual Reality</h3>
      </div>
    </div>
    <div className={styles.knowledgeTopicTableFrame}>
      <div className={styles.knowledgeTopicTable}>
        <div className={styles.cellSquare}>
          <img
            className={styles.cellImage}
            src="/assets/videoPlaceholder.png"
            alt="vrh"
          />
          <div className={styles.textWrapper}>
            <h4 className={styles.cellTitle}>Virtual Reality</h4>
            <p className={styles.cellText}>
              They waited till midnight; but no change took place among the guards.
            </p>
          </div>
          <button className={styles.button}>Подробнее</button>
        </div>
        <div className={styles.cellSquare}>
          <img
            className={styles.cellImage}
            src="/assets/videoPlaceholder.png"
            alt="vrh"
          />
          <div className={styles.textWrapper}>
            <h4 className={styles.cellTitle}>Virtual Reality</h4>
            <p className={styles.cellText}>
              They waited till midnight; but no change took place among the guards.
            </p>
          </div>
          <button className={styles.button}>Подробнее</button>
        </div>
        <div className={styles.cellSquare}>
          <img
            className={styles.cellImage}
            src="/assets/videoPlaceholder.png"
            alt="vrh"
          />
          <div className={styles.textWrapper}>
            <h4 className={styles.cellTitle}>Virtual Reality</h4>
            <p className={styles.cellText}>
              They waited till midnight; but no change took place among the guards.
            </p>
          </div>
          <button className={styles.button}>Подробнее</button>
        </div>
        <div className={styles.cellSquare}>
          <img
            className={styles.cellImage}
            src="/assets/videoPlaceholder.png"
            alt="vrh"
          />
          <div className={styles.textWrapper}>
            <h4 className={styles.cellTitle}>Virtual Reality</h4>
            <p className={styles.cellText}>
              They waited till midnight; but no change took place among the guards.
            </p>
          </div>
          <button className={styles.button}>Подробнее</button>
        </div>
        <div className={styles.cellSquare}>
          <img
            className={styles.cellImage}
            src="/assets/videoPlaceholder.png"
            alt="vrh"
          />
          <div className={styles.textWrapper}>
            <h4 className={styles.cellTitle}>Virtual Reality</h4>
            <p className={styles.cellText}>
              They waited till midnight; but no change took place among the guards.
            </p>
          </div>
          <button className={styles.button}>Подробнее</button>
        </div>
      </div>
    </div>
  </div>
);

export default Topics;
