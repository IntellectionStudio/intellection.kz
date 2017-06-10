import {pure} from 'recompact';
import React, {Component} from 'react';
import ModalVideo from 'react-modal-video';

import mapValues from 'utils/mapValues';
import {Image} from 'components';

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
        <Image
          className={styles.contain}
          name="videoPlaceholder.jpg"
          background
          alt="intellection video placeholder"
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
        </Image>
      </div>
    );
  }
}

export default pure(HeroVideo);
