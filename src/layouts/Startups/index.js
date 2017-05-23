/* @flow */

import {mapObjIndexed, values} from 'ramda';
import {pure} from 'recompact';
import React, {Component} from 'react';

import Page from 'layouts/Page';

import styles from './index.css';

type StartupsOwnPropsType = {|
  head: Object,
|};

const mapVal = (fn, obj) => values(mapObjIndexed(fn, obj));

class Startups extends Component {
  renderStartupLogo = (startup: Object, key: string) => (
    <button key={key} className={styles.logoButton}>
      <img className={styles.logo} src={startup.logo} alt={`${key} Logo`} />
    </button>
  );

  render() {
    return (
      <Page {...this.props}>
        <div className={styles.container}>
          <div className={styles.logos}>
            {mapVal(this.renderStartupLogo, this.props.head.startups)}
          </div>
          <div className={styles.startup}>
            Startups
          </div>
        </div>
      </Page>
    );
  }
}

const EnhancedStartups: EnhancedComponentType<StartupsOwnPropsType> = pure(
  Startups,
);

export default EnhancedStartups;
