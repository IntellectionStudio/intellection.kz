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
    <a className={styles.burger}>
      <span className={styles.bar} />
      <span className={styles.barMid} />
      <span className={styles.bar} />
    </a>
  </header>
);

export default Header;
