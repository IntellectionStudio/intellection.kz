/* @flow */

import React, {Component} from 'react';

import mapValues from 'utils/mapValues';
import Page from 'layouts/Page';

import styles from './index.css';

type StartupsPageOwnPropsType = PhenomicPagePropsType;

class StartupsPage extends Component {
  props: StartupsPageOwnPropsType;

  renderStartupLogo = (startup: Object, key: string) => (
    <button key={key} className={styles.logoButton}>
      <img className={styles.logo} src={startup.logo} alt={`${key} Logo`} />
    </button>
  );

  render() {
    return (
      <Page {...Page.pickPageProps(this.props)}>
        <div className={styles.container}>
          <div className={styles.logos}>
            {mapValues(this.renderStartupLogo)(this.props.head.startups)}
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
