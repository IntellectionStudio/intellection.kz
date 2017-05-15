/* @flow */

import React from 'react';

import Page from 'layouts/Page';

import styles from './index.css';

type PropsType = {
  head: Object,
};

const Homepage = (props: PropsType) => (
  <Page {...props}>
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Стартап центр Intellection
        </h1>
        <p className={styles.heroText}>
          They waited till midnight; but no change took place among the guards, and it became apparent that their yielding to sleep could not be counted on.
        </p>
      </div>
    </div>
    <div className={styles.video}>
      <div className={styles.videoContent}>
        <h1 className={styles.videoTitle}>
          Бла-бла-бла-бла-бла-бла
        </h1>
        <p className={styles.videoText}>
          They waited till midnight; but no change took place among the guards, and it became apparent that their yielding to sleep could not be counted on.
        </p>
        <a className={styles.videoButton}>
          Смотреть видео
          <img
            className={styles.playIcon}
            src="/assets/play-blue.svg"
            alt="Play"
          />
        </a>
      </div>
    </div>
    <div className={styles.team}>
      <div className={styles.teamContent}>
        <h1 className={styles.teamTitle}>
          Наша команда
        </h1>
        <p className={styles.teamText}>
          They waited till midnight; but no change took place among the guards, and it became apparent that their yielding to sleep could not be counted on.
        </p>
      </div>
    </div>
    <div className={styles.management} />
  </Page>
);

export default Homepage;
