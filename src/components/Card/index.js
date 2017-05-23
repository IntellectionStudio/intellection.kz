/* @flow */

import {Link} from 'phenomic';
import {pure} from 'recompact';
import React from 'react';

import styles from './index.css';

type CardOwnPropsType = {|
  link: string,
  image: string,
  title: string,
  text: string,
|};

const Card = ({link, image, title, text}) => (
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

const EnhancedCard: EnhancedComponentType<CardOwnPropsType> = pure(Card);

export default EnhancedCard;
