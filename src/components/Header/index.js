/* @flow */

import React, {Component} from 'react';
import {Link} from 'phenomic';
import cx from 'classnames';

import styles from './index.css';

type PropsType = {|
  white: boolean,
|};

class Header extends Component {
  props: PropsType;
  state = {
    open: false,
  };

  renderMenuButton() {
    if (this.state.open) {
      return (
        <button
          className={styles.burger}
          onClick={() => this.setState({open: !this.state.open})}
        >
          <span className={styles.menuOpened}>^</span>
        </button>
      );
    }
    return (
      <button
        className={styles.burger}
        onClick={() => this.setState({open: !this.state.open})}
      >
        <span
          className={cx(styles.bar, {
            [styles.barBlue]: this.props.white,
          })}
        />
        <span
          className={cx(styles.bar, {
            [styles.barMidBlue]: this.props.white,
          })}
        />
        <span
          className={cx(styles.bar, {
            [styles.barBlue]: this.props.white,
          })}
        />
      </button>
    );
  }

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
              [styles.navWhite]: white,
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
          <button
            className={cx(styles.burger, {
              [styles.burgerDetail]: true,
              [styles.burgerDetailOpen]: this.state.open,
              [styles.burgerDetailWhite]: white,
            })}
            onClick={() => this.setState({open: !this.state.open})}
          >
            <span />
            <span />
            <span />
            <span />
          </button>
        </header>
      </div>
    );
  }
}

export default Header;
