import {equals, isNil, pickBy, reject} from 'ramda';
import {pure} from 'recompact';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import throttle from 'lodash.throttle';

import mapValues from 'utils/mapValues';

const MOUSE_MOVE_THROTTLE_WAIT = 100;

class FaceImage extends Component {
  state = {
    mouseArea: 'TOP_LEFT',
  };
  img;

  getMouseAreaBoundingBoxMap = () => {
    const imgDomNode = this.img
      ? ReactDOM.findDOMNode(this.img) // eslint-disable-line react/no-find-dom-node
      : null;

    if (!imgDomNode) {
      return null;
    }

    const {
      top: selfTop,
      left: selfLeft,
      right: selfRight,
      bottom: selfBottom,
    } = imgDomNode.getBoundingClientRect();

    const topBounds = [0, selfTop];
    const centerXBounds = [selfLeft, selfRight];
    const centerYBounds = [selfTop, selfBottom];
    const bottomBounds = [selfBottom, window.innerHeight];
    const leftBounds = [0, selfLeft];
    const rightBounds = [selfRight, window.innerWidth];

    return {
      CENTER: {x: centerXBounds, y: centerYBounds},
      TOP: {x: centerXBounds, y: topBounds},
      TOP_RIGHT: {x: rightBounds, y: topBounds},
      RIGHT: {x: rightBounds, y: centerYBounds},
      BOTTOM_RIGHT: {x: rightBounds, y: bottomBounds},
      BOTTOM: {x: centerXBounds, y: bottomBounds},
      BOTTOM_LEFT: {x: leftBounds, y: bottomBounds},
      LEFT: {x: leftBounds, y: centerYBounds},
      TOP_LEFT: {x: leftBounds, y: topBounds},
    };
  };

  componentDidMount() {
    document.addEventListener('mousemove', this.handleMouseMove);
  }

  getFaceImageForMouseArea = mouseArea => {
    const {faceImageCollection} = this.props;

    if (!faceImageCollection) {
      return this.props.defaultImage;
    }

    switch (mouseArea) {
      case 'CENTER':
        return faceImageCollection.center;
      case 'TOP':
        return faceImageCollection.top;
      case 'TOP_RIGHT':
        return faceImageCollection.topRight;
      case 'RIGHT':
        return faceImageCollection.right;
      case 'BOTTOM_RIGHT':
        return faceImageCollection.bottomRight;
      case 'BOTTOM':
        return faceImageCollection.bottom;
      case 'BOTTOM_LEFT':
        return faceImageCollection.bottomLeft;
      case 'LEFT':
        return faceImageCollection.left;
      case 'TOP_LEFT':
        return faceImageCollection.topLeft;
      default:
        return faceImageCollection.topLeft;
    }
  };

  captureImage = img => {
    this.img = img;
  };

  handleMouseMove = throttle(event => {
    const boundingBoxMap = this.getMouseAreaBoundingBoxMap();

    if (!boundingBoxMap) {
      return;
    }

    const {clientX: x, clientY: y} = event;

    const relevantBoundingBox = reject(isNil)(
      mapValues(boundingBox => {
        const isRelevant =
          x > boundingBox.x[0] &&
          x < boundingBox.x[1] &&
          y > boundingBox.y[0] &&
          y < boundingBox.y[1];

        return isRelevant ? boundingBox : null;
      })(boundingBoxMap),
    )[0];

    const mouseArea = Object.keys(
      pickBy(equals(relevantBoundingBox))(boundingBoxMap),
    )[0];

    this.setState({mouseArea});
  }, MOUSE_MOVE_THROTTLE_WAIT);

  render() {
    return (
      <img
        ref={this.captureImage}
        className={this.props.className}
        src={this.getFaceImageForMouseArea(this.state.mouseArea)}
        alt="Profile"
      />
    );
  }
}

export default pure(FaceImage);
