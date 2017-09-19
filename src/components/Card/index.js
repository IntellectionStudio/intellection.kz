import {Link} from 'phenomic';
import {pure} from 'recompact';
import React from 'react';

import {Image} from 'components';

import styles from './index.css';

const Card = ({card: {link, image, title, text}}) => (
  <div className={styles.root}>
    <Link className={styles.container} to={link}>
      <Image className={styles.image} name={image} alt={link} />
      <div>
        <h6 className={styles.title}>{title}</h6>
        <p className={styles.text}>{text}</p>
      </div>
    </Link>
  </div>
);

export default pure(Card);
