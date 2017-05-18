/* @flow */

import React, {Component} from 'react';
import {Link} from 'phenomic';
import cx from 'classnames';

import styles from './index.css';

type PropsType = {
  white: boolean,
};

class Header extends Component {
  props: PropsType;
  state = {
    open: false,
  };

  render() {
    const {white} = this.props;
    return (
      <div
        className={cx(styles.headerWrapper, {
          [styles.white]: white,
        })}
      >
        <header className={styles.header}>
          <Link className={styles.logoLink} to="/">
            {white
              ? <img
                  className={styles.logo}
                  src="/assets/logo2.png"
                  alt="Logo"
                />
              : <img
                  className={styles.logo}
                  src="/assets/logo.png"
                  alt="Logo"
                />}
          </Link>
          <nav
            className={cx(styles.nav, {
              [styles.open]: this.state.open,
            })}
          >
            <Link
              className={cx(styles.navItem, {
                [styles.navItemOpen]: this.state.open,
              })}
              to="/about"
            >
              О нас
            </Link>
            <Link
              className={cx(styles.navItem, {
                [styles.navItemOpen]: this.state.open,
              })}
              to="/"
            >
              Наши стартапы
            </Link>
            <Link
              className={cx(styles.navItem, {
                [styles.navItemOpen]: this.state.open,
              })}
              to="/"
            >
              Курсы
            </Link>
            <Link
              className={cx(styles.navItem, {
                [styles.navItemOpen]: this.state.open,
              })}
              to="/"
            >
              Knowledge Base
            </Link>
            <Link
              className={cx(styles.navItem, {
                [styles.navItemOpen]: this.state.open,
              })}
              to="/"
            >
              Наши видео
            </Link>
            <Link
              className={cx(styles.navItem, {
                [styles.navItemOpen]: this.state.open,
              })}
              to="/"
            >
              Блог
            </Link>
          </nav>
          <button className={styles.burger}>
            <span
              className={cx(styles.bar, {
                [styles.barBlue]: white,
              })}
            />
            <span
              className={cx(styles.bar, {
                [styles.barMidBlue]: white,
              })}
            />
            <span
              className={cx(styles.bar, {
                [styles.barBlue]: white,
              })}
            />
          </button>
        </header>
      </div>
    );
  }
}

export default Header;
