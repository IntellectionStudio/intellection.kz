/* @flow */

import React from 'react';

import styles from './index.css';

const BackgroundVideo = () => (
  <div className={styles.backgroundVideoWrapper}>
    <div
      className={styles.background}
      style={{
        background: 'url("assets/videoPlaceholder.png") center no-repeat',
      }}
    >
      <video
        className={styles.backgroundVideo}
        poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg"
        playsInline
        autoPlay
        muted
        loop
      >
        <source
          src="http://thenewcode.com/assets/videos/polina.webm"
          type="video/webm"
        />
        <source
          src="http://thenewcode.com/assets/videos/polina.mp4"
          type="video/mp4"
        />
      </video>
    </div>
    <div className={styles.content}>
      <h1 className={styles.heading}>
        Стартап центр Intellection
      </h1>
      <p className={styles.description}>
        Пару слов о компании
      </p>
      <div className={styles.buttonWrapper}>
        <img className={styles.play} src="assets/play.png" alt="Play Button" />
      </div>
    </div>
  </div>
);

export default BackgroundVideo;
