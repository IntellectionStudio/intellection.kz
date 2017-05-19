/* @flow */

import React from 'react';

import styles from './index.css';

type PropsType = {|
  image: string,
  playIcon: string,
  sources: Array<string>,
  text: string,
  title: string,
|};

const HeroVideo = ({image, playIcon, sources, text, title}: PropsType) => (
  <div className={styles.heroVideo}>
    <div
      className={styles.contain}
      style={{
        background: `linear-gradient(rgba(81, 169, 242, 0.8), rgba(186, 219, 250, 0.8)), url('${image}') center center no-repeat`,
      }}
    >
      <div className={styles.heroVideoBackground}>
        <video
          className={styles.responsiveVideo}
          poster={image}
          playsInline
          autoPlay
          muted
          loop
        >
          {Object.values(sources).map(src => <source key={src} src={src} />)}
        </video>
      </div>
      <a className={styles.overlay} href="">
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.text}>{text}</p>
          <img alt="Play Video" className={styles.playIcon} src={playIcon} />
        </div>
      </a>
    </div>
  </div>
);

export default HeroVideo;
