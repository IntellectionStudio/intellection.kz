/* @flow */

import React from 'react';
import {Link} from 'phenomic';

import styles from './index.css';

type PropsType = {|
  link: string,
  image: string,
  title: string,
  text: string,
|};

const Card = ({link, image, title, text}: PropsType) => (
  <div className={styles.root}>
    <Link className={styles.container} to={link}>
      <img className={styles.image} src={image} alt={link} />
      <div>
        <h6 className={styles.title}>{title}</h6>
        <p className={styles.text}>
          {text}
        </p>
      </div>
    </Link>
  </div>
);

export default Card;
