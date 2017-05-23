/* @flow */

import {pure} from 'recompact';
import React, {Component} from 'react';
import ModalVideo from 'react-modal-video';

import styles from './index.css';

type HeroVideoOwnPropsType = {|
  image: string,
  playIcon: string,
  sources: Array<string>,
  text: string,
  title: string,
|};
type HeroVideoStateType = {|
  isOpen: boolean,
|};

class HeroVideo extends Component {
  state: HeroVideoStateType = {
    isOpen: false,
  };

  openModal() {
    this.setState({isOpen: false});
  }

  render() {
    const {image, playIcon, sources, text, title} = this.props;

    return (
      <div className={styles.heroVideo}>
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="L61p2uyiMSo"
        />
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
              {Object.values(sources).map(src => (
                <source key={src} src={src} />
              ))}
            </video>
          </div>
          <div className={styles.overlay}>
            <div className={styles.content}>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.text}>{text}</p>
              <button
                className={styles.playIconButton}
                onClick={() => this.setState({isOpen: true})}
              >
                <img
                  alt="Play Video"
                  className={styles.playIcon}
                  src={playIcon}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const EnhancedHeroVideo: EnhancedComponentType<HeroVideoOwnPropsType> = pure(
  HeroVideo,
);

export default EnhancedHeroVideo;
