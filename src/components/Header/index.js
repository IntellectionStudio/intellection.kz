import {Link} from 'phenomic';
import {pure} from 'recompact';
import cx from 'classnames';
import React, {Component} from 'react';

import config from 'config';
import {ChatForm, SVGImage} from 'components';

import styles from './index.css';

class Header extends Component {
  state = {
    isOpen: false,
    isChatFromOpened: false,
  };

  handleContactUsClick = () => {
    this.setState({
      isChatFromOpened: !this.state.isChatFromOpened,
    });
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
            <SVGImage
              className={styles.logo}
              name={
                white
                  ? 'logo-intellection-blue.svg'
                  : 'logo-intellection-white.svg'
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

            <button
              className={styles.ctaButton}
              onClick={this.handleContactUsClick}
            >
              <div className={styles.ctaTitle}>Связаться с нами</div>
            </button>
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

        <div
          className={cx(styles.chatForm, {
            [styles.hiddenChatForm]: !this.state.isChatFromOpened,
          })}
        >
          <ChatForm
            opened={this.state.isChatFromOpened}
            handleClose={this.handleContactUsClick}
          />
        </div>
      </div>
    );
  }
}

export default pure(Header);
