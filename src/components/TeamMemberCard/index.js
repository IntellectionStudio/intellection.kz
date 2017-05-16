/* @flow */

import React from 'react';

import styles from './index.css';

type PropsType = {
  image: string,
  firstName: string,
  lastName: string,
  position: string,
  text: string,
};

const Header = ({image, firstName, lastName, position, text}: PropsType) => (
  <div className={styles.container}>
    <div className={styles.profile}>
      <img className={styles.image} src={image} alt="Profile" />
      <h2 className={styles.name}>{firstName} {lastName}</h2>
      <h3 className={styles.position}>{position}</h3>
    </div>
    <div className={styles.text}>
      {text}
    </div>
  </div>
);

export default Header;
