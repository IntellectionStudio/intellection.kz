/* @flow */

import React, {Component} from 'react';
import Measure from 'react-measure';
import {mapObjIndexed, values} from 'ramda';
import cx from 'classnames';

import styles from './index.css';

type PropsType = {
  head: Object,
};
const mapVal = (fn, obj) => values(mapObjIndexed(fn, obj));
class StartupsHeader extends Component {
  props: PropsType;
  state: Object = {
    logos: {
      width: 0,
      left: 0,
    },
    startupsHeader: {
      width: 0,
      left: 0,
    },
    showRightButton: true,
  };

  renderStartupLogo = (startup: Object, key: string) => (
    <button key={key} className={styles.logoButton}>
      <img className={styles.logo} src={startup.logo} alt={`${key} Logo`} />
    </button>
  );

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
  moveLeft(left: number) {
    this.setState({
      logos: {
        ...this.state.logos,
        left: this.state.logos.left + left,
      },
    });
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
              style={{marginLeft: `${this.state.logos.left}px`}}
              ref={el => {
                // $FlowFixMe
                this.logos = el;
              }}
            >
              {mapVal(this.renderStartupLogo, this.props.head.startups)}
            </div>
          </Measure>
          {this.renderRightButton()}
        </div>
      </Measure>
    );
  }
}

export default StartupsHeader;
