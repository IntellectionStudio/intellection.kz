import React, {Component, PropTypes} from 'react';
import Measure from 'react-measure';
import {mapObjIndexed, values} from 'ramda';
import cx from 'classnames';

import styles from './index.css';

const mapVal = (fn, obj) => values(mapObjIndexed(fn, obj));
class StartupsHeader extends Component {
  static propTypes = {
    startups: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    selectedStartup: PropTypes.string,
  };
  state = {
    logos: {
      width: 0,
      left: 0,
    },
    startupsHeader: {
      width: 0,
      left: 0,
      right: 0,
    },
  };
  renderStartupLogo = (startup, key) => (
    <button
      key={startup.title}
      className={styles.logoButton}
      // $FlowFixMe
      onClick={() => {
        this.props.setStartup(startup.title);
      }}
    >
      <img
        className={styles.logo}
        src={
          this.props.selectedStartup !== startup.title
            ? startup.logo
            : startup.logo1
        }
        alt={`${key} Logo`}
      />
    </button>
  );

  logoSwitch(logo, logo1) {
    if (this.state.clicked) {
      return logo1;
    }
    return logo;
  }
  renderRightButton() {
    const {startupsHeader, logos} = this.state;
    const logosRight = logos.left + logos.width;
    const startupsHeaderRight = startupsHeader.width;
    if (logosRight > startupsHeaderRight) {
      return (
        <button
          className={styles.scrollRightButton}
          onClick={() => {
            if (logosRight - startupsHeaderRight < startupsHeaderRight) {
              this.moveLeft(startupsHeaderRight - logosRight);
            } else {
              this.moveLeft(-startupsHeader.width);
            }
          }}
        >
          <img src="/assets/Right.png" alt="scrollbutton" />
        </button>
      );
    }
    return null;
  }
  renderLeftButton() {
    const {startupsHeader, logos} = this.state;
    if (logos.left < 0) {
      return (
        <button
          className={styles.scrollLeftButton}
          onClick={() => {
            if (startupsHeader.width + logos.left > 0) {
              this.moveLeft(-logos.left);
            } else {
              this.moveLeft(startupsHeader.width);
            }
          }}
        >
          <img src="/assets/Left.png" alt="left" />
        </button>
      );
    }
    return null;
  }
  moveLeft(left) {
    this.setState({
      logos: {
        ...this.state.logos,
        left: this.state.logos.left + left,
      },
    });
  }
  logosLeft() {
    const {startupsHeader, logos} = this.state;
    if (
      startupsHeader.width > logos.width ||
      (startupsHeader.right < logos.width &&
        logos.left + logos.width < startupsHeader.width)
    ) {
      logos.left -= logos.left;

      return logos.left;
    }
    return logos.left;
  }
  render() {
    const {startupsHeader, logos} = this.state;
    return (
      <Measure
        onMeasure={dimensions => {
          this.setState({
            startupsHeader: {
              ...this.state.startupsHeader,
              width: dimensions.width,
              right: dimensions.right,
            },
          });
        }}
      >
        <div
          className={cx(styles.startupsHeader, {
            [styles.centerLogos]: startupsHeader.width > logos.width,
          })}
        >
          {this.renderLeftButton()}
          <Measure
            onMeasure={dimensions => {
              this.setState({
                logos: {
                  ...this.state.logos,
                  width: dimensions.width,
                },
              });
            }}
          >
            <div
              className={styles.logos}
              style={{marginLeft: `${this.logosLeft()}px`}}
              ref={el => {
                this.logos = el;
              }}
            >
              {mapVal(this.renderStartupLogo, this.props.startups)}
            </div>
          </Measure>
          {this.renderRightButton()}
        </div>
      </Measure>
    );
  }
}

export default StartupsHeader;
