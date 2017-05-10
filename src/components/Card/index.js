/* @flow */

import React from 'react';
import {Link} from 'phenomic';

import styles from './index.css';

type PropsType = {|
  link: string,
  image: string,
  heading: string,
  text: string,
|};

const Card = ({link, image, heading, text}: PropsType) => (
  <div className={styles.root}>
    <Link className={styles.container} to={link}>
      <img className={styles.image} src={image} alt={link} />
      <div>
        <h6 className={styles.heading}>{heading}</h6>
        <p className={styles.detail}>
          {text}
        </p>
      </div>
    </Link>
  </div>
);

export default Card;
