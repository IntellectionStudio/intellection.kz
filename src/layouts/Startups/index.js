/* @flow */

import React from 'react';
import Slider from 'react-slick';

import Page from 'layouts/Page';

import styles from './index.css';

type PropsType = {
  head: Object,
};

const Homepage = (props: PropsType) => (
  <Page {...props}>
    <div className={styles.container}>
      <Slider
        arrows={false}
        infinite={false}
        slidesToShow={5}
        slidesToScroll={1}
      >
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div>
      </Slider>
    </div>
  </Page>
);

export default Homepage;
