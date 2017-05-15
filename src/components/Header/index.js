/* @flow */

import React from 'react';
import {Link} from 'phenomic';
import cx from 'classnames';

import styles from './index.css';

type PropsType = {
  white: string,
};

const Header = ({white}: PropsType) => (
  <div
    className={cx(styles.headerWrapper, {
      [styles.white]: white,
    })}
  >
    <header className={styles.header}>
      <Link className={styles.logoLink} to="/">
        <img className={styles.logo} src="/assets/logo.png" alt="Logo" />
      </Link>
      <nav className={styles.nav}>
        <Link className={styles.about} to="/about">
          О нас
        </Link>
        <Link className={styles.startups} to="/">
          Наши стартапы
        </Link>
        <Link className={styles.courses} to="/">
          Курсы
        </Link>
        <Link className={styles.knowledge} to="/">
          Knowledge Base
        </Link>
        <Link className={styles.videos} to="/">
          Наши видео
        </Link>
        <Link className={styles.blog} to="/">
          Блог
        </Link>
      </nav>
      <a className={styles.burger}>
        <span className={styles.bar} />
        <span className={styles.barMid} />
        <span className={styles.bar} />
      </a>
    </header>
  </div>
);

export default Header;
