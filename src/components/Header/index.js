/* @flow */

import {Link} from 'phenomic';
import React, {PropTypes} from 'react';
import Svg from 'react-svg-inline';

import gitHubSvg from '../icons/iconmonstr-github-1.svg';
import styles from './index.css';
import twitterSvg from '../icons/iconmonstr-twitter-1.svg';

type ContextType = {|
  metadata: Phenomic$Metadata,
|};

const Header = (props: Object, {metadata: {pkg}}: ContextType) => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <div className={styles.navPart1}>
        <Link className={styles.link} to={'/'}>
          {'Home'}
        </Link>
      </div>
      <div className={styles.navPart2}>
        {pkg.twitter &&
          <a
            href={`https://twitter.com/${pkg.twitter}`}
            className={styles.link}
          >
            <Svg svg={twitterSvg} cleanup />
            {'Twitter'}
          </a>}
        {pkg.repository &&
          <a href={pkg.repository} className={styles.link}>
            <Svg svg={gitHubSvg} cleanup />
            {'GitHub'}
          </a>}
      </div>
    </nav>
  </header>
);

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default Header;
