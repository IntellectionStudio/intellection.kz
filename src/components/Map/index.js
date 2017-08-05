/* @flow */

import React, {Component} from 'react';
import Measure from 'react-measure';

import styles from './index.css';

const API_KEY = 'AIzaSyDHzwnCkK6DwTntBvi2avh6imL2Y5W_Ts0';
const googleMapURL = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=Space+Needle,Seattle+WA`;

type MapStateType = {|
  width: number,
  height: number,
|};

const Iframe = (width, height) => (
  <iframe
    title={'Google map'}
    width={width}
    height={height}
    frameBorder="0"
    src={googleMapURL}
    allowFullScreen
  />
);

class Map extends Component {
  state: MapStateType = {
    width: 675,
    height: 100,
  };

  handleBackgroundMeasure = dimensions =>
    console.log(dimensions) ||
    this.setState({
      width: this.container.width,
      height: this.container.height,
    });

  render() {
    return (
      <div ref={el => (this.container = el)} className={styles.container}>
        <Measure onMeasure={this.handleBackgroundMeasure}>
          <div className={styles.intrinsicContainer}>
            <Iframe {...this.state} />
          </div>
        </Measure>
      </div>
    );
  }
}

export default Map;
