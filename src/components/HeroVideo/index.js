import {pure} from 'recompact';
import React, {Component} from 'react';
import ModalVideo from 'react-modal-video';

import mapValues from 'utils/mapValues';

import styles from './index.css';

class HeroVideo extends Component {
  state = {
    isOpen: false,
  };

  handlePlayButtonClick = () => this.setState({isOpen: true});

  renderSource = src => <source key={src} src={src} />;

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
              {mapValues(this.renderSource)(sources)}
            </video>
          </div>
          <div className={styles.overlay}>
            <div className={styles.content}>
              <p className={styles.text}>{text}</p>
              <h1 className={styles.title}>{title}</h1>
              <button
                className={styles.playIconButton}
                onClick={this.handlePlayButtonClick}
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

const EnhancedHeroVideo = pure(HeroVideo);

export default EnhancedHeroVideo;
