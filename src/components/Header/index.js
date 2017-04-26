/* @flow */

import React from 'react';
import {Link} from 'phenomic';

import styles from './index.css';
import logo from './logo.png';

const Header = () => (
  <header className={styles.header}>
    <Link className={styles.logoLink} to="/">
      <img className={styles.logo} src={logo} alt="Logo" />
    </Link>
    <div className={styles.burgerContainer}>
      <button className={styles.burger}>☰</button>
    </div>
  </header>
);

export default Header;
