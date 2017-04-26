/* @flow */

import React from 'react';

import styles from './index.css';
import logo from './logo.png';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logoContainer}>
      <img className={styles.logo} src={logo} alt="Logo" />
    </div>
    <div className={styles.burgerContainer}>
      <button className={styles.burger}>☰</button>
    </div>
  </header>
);

export default Header;
