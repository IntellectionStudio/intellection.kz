/* @flow */

import React from 'react';

import styles from './index.css';

const HeroVideo = () => (
  <div className={styles.heroVideo}>
    <div className={styles.contain}>
      <div className={styles.heroVideoBackground}>
        <video
          className={styles.responsiveVideo}
          poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg"
          playsInline
          autoPlay
          muted
          loop
        >
          <source src="https://d125fmws0bore1.cloudfront.net/videos/video-bg-udacity.mp4" />
          <source src="https://d125fmws0bore1.cloudfront.net/videos/video-bg-udacity.ogv" />
          <source src="https://d125fmws0bore1.cloudfront.net/videos/video-bg-udacity.webm" />
        </video>
      </div>
      <a className={styles.overlay} href="">
        <div className={styles.overlayContent}>
          <h1 className={styles.overlayHeading}>Стартап центр Intellection</h1>
          <p className={styles.overlayDescription}>Пару слов о компании</p>
          <img
            alt="Play Video"
            className={styles.playIcon}
            src="https://d125fmws0bore1.cloudfront.net/assets/svgs/icon-video-white-b3c98bb05b8833c23892d0d4fc626582c3c32146b147ef4417ea159b80ace033.svg"
          />
        </div>
      </a>
    </div>
  </div>
);

export default HeroVideo;
