/* @flow */

import React, {Component} from 'react';
import {Link} from 'phenomic';

import StartupsHeader from 'components/StartupsHeader';
import Page from 'layouts/Page';

import styles from './index.css';

type StartupsPageOwnPropsType = PhenomicPagePropsType;
class StartupsPage extends Component {
  props: StartupsPageOwnPropsType;
  state = {
    startupToShow: null,
  };
  // $FlowFixMe
  setStartup = startupToShow => this.setState({startupToShow});
  renderContent() {
    const {startupToShow} = this.state;
    if (startupToShow == null) {
      const {image, title, text} = this.props.head.default;
      return (
        <div
          className={styles.backgroundStartup}
          style={{
            background: `url(${image}) center center no-repeat`,
          }}
        >
          <div className={styles.defaultStartupTitle}>
            {title}
          </div>
          <div className={styles.defaultStartupText}>
            {text}
          </div>
        </div>
      );
    }
    const {image, title, text, link} = this.props.head.startups[startupToShow];
    return (
      <div>
        <div className={styles.startupTitle}>
          {title}
        </div>
        <div className={styles.startupText}>
          {text}
        </div>
        <div className={styles.learnMore}>
          <Link to={link}>
            Подробнее
          </Link>
        </div>
        <div
          className={styles.backgroundStartup}
          style={{
            background: `url(${image}) center center no-repeat`,
          }}
        />
      </div>
    );
  }
  render() {
    return (
      <Page {...this.props}>
        <div className={styles.container}>
          <StartupsHeader setStartup={this.setStartup} {...this.props} />
          {this.renderContent()}
        </div>
      </Page>
    );
  }
}

export default StartupsPage;
