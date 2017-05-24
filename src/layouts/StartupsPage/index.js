/* @flow */

import {mapObjIndexed, values} from 'ramda';
import React, {Component} from 'react';

import Page from 'layouts/Page';

import styles from './index.css';

type StartupsPageOwnPropsType = PhenomicPagePropsType;

const mapVal = (fn, obj) => values(mapObjIndexed(fn, obj));

class StartupsPage extends Component {
  props: StartupsPageOwnPropsType;

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

export default StartupsPage;
