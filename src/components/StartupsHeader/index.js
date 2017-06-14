import {pure} from 'recompact';
import React, {Component} from 'react';
import Measure from 'react-measure';
import cx from 'classnames';

import {SVGImage} from 'components';
import mapValues from 'utils/mapValues';

import styles from './index.css';

class StartupsHeader extends Component {
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

  logosLeft = () => {
    const {startupsHeader, logos} = this.state;

    if (
      startupsHeader.width > logos.width ||
      (startupsHeader.right < logos.width &&
        logos.left + logos.width < startupsHeader.width)
    ) {
      logos.left -= logos.left;
    }

    return logos.left;
  };

  moveLeft = left => {
    this.setState(prevState => ({
      logos: {
        ...prevState.logos,
        left: prevState.logos.left + left,
      },
    }));
  };

  handleLeftButtonClick = () => {
    const {startupsHeader, logos} = this.state;

    this.moveLeft(
      startupsHeader.width + logos.left > 0
        ? -logos.left
        : startupsHeader.width,
    );
  };

  handleRightButtonClick = () => {
    const {startupsHeader, logos} = this.state;
    const logosRight = logos.left + logos.width;
    const startupsHeaderRight = startupsHeader.width;

    this.moveLeft(
      logosRight - startupsHeaderRight < startupsHeaderRight
        ? startupsHeaderRight - logosRight
        : -startupsHeader.width,
    );
  };

  handleContainerMeasure = dimensions =>
    this.setState(prevState => ({
      startupsHeader: {
        ...prevState.startupsHeader,
        width: dimensions.width,
        right: dimensions.right,
      },
    }));

  handleContentMeasure = dimensions =>
    this.setState(prevState => ({
      logos: {
        ...prevState.logos,
        width: dimensions.width,
      },
    }));

  captureLogos = logos => {
    this.logos = logos;
  };

  renderStartupLogo = (startup, idx) => {
    const {onStartupSelect, selectedStartupIdx} = this.props;
    const handleClick = () => onStartupSelect(idx);

    return (
      <button
        key={startup.title}
        className={styles.logoButton}
        onClick={handleClick}
      >

        <SVGImage
          className={styles.logo}
          name={
            idx === selectedStartupIdx
              ? startup.coloured_logo
              : startup.grey_logo
          }
          alt={`${startup.title}-logo`}
        />
      </button>
    );
  };

  renderRightButton = () => {
    const {startupsHeader, logos} = this.state;
    const logosRight = logos.left + logos.width;
    const startupsHeaderRight = startupsHeader.width;

    return logosRight > startupsHeaderRight
      ? <button
          className={styles.scrollRightButton}
          onClick={this.handleRightButtonClick}
        >
          <SVGImage name="logo-startups-right.svg" alt="scrollbutton" />
        </button>
      : null;
  };

  renderLeftButton = () =>
    this.state.logos.left < 0
      ? <button
          className={styles.scrollLeftButton}
          onClick={this.handleLeftButtonClick}
        >
          <SVGImage name="logo-startups-left.svg" alt="left" />
        </button>
      : null;

  render() {
    const {startupsHeader, logos} = this.state;

    return (
      <Measure onMeasure={this.handleContainerMeasure}>
        <div
          className={cx(styles.startupsHeader, {
            [styles.centerLogos]: startupsHeader.width > logos.width,
          })}
        >
          {this.renderLeftButton()}
          <Measure onMeasure={this.handleContentMeasure}>
            <div
              ref={this.captureLogos}
              className={styles.logos}
              style={{marginLeft: `${this.logosLeft()}px`}}
            >
              {mapValues(this.renderStartupLogo, this.props.startups)}
            </div>
          </Measure>
          {this.renderRightButton()}
        </div>
      </Measure>
    );
  }
}

export default pure(StartupsHeader);
