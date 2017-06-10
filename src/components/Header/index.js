import {Link} from 'phenomic';
import {pure} from 'recompact';
import React, {Component} from 'react';
import cx from 'classnames';

import config from 'config';

import styles from './index.css';

class Header extends Component {
  state = {
    isOpen: false,
  };

  handleBurgerButtonClick = () =>
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));

  renderLink = ({title, path}) => (
    <Link
      key={`${title}-${path}`}
      className={cx(styles.navItem, {
        [styles.navItemOpen]: this.state.isOpen,
      })}
      to={path}
    >
      {title}
    </Link>
  );

  render() {
    const {white} = this.props;
    const {isOpen} = this.state;

    return (
      <div
        className={cx(styles.headerWrapper, {
          [styles.white]: white,
        })}
      >
        <header className={styles.header}>
          <Link className={styles.logoLink} to="/">
            <img
              className={styles.logo}
              src={
                white
                  ? '/assets/icons/logo-intellection-blue.svg'
                  : '/assets/icons/logo-intellection-white.svg'
              }
              alt="Logo"
            />
          </Link>
          <nav
            className={cx(styles.nav, {
              [styles.open]: isOpen,
              [styles.navWhite]: white,
            })}
          >
            {config.headerLinks.map(this.renderLink)}
          </nav>
          <button
            className={cx(styles.burger, {
              [styles.burgerDetail]: true,
              [styles.burgerDetailOpen]: this.state.isOpen,
              [styles.burgerDetailWhite]: white,
            })}
            onClick={this.handleBurgerButtonClick}
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

export default pure(Header);
