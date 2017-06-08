import {Link} from 'phenomic';
import {pure} from 'recompact';
import enhanceCollection from 'phenomic/lib/enhance-collection';
import React, {PropTypes, Component} from 'react';

import StartupsHeader from 'components/StartupsHeader';
import Page from 'layouts/Page';

import styles from './index.css';

class StartupsPage extends Component {
  state = {
    selectedStartupIdx: null,
  };

  handleStartupSelect = selectedStartupIdx =>
    this.setState({selectedStartupIdx});

  renderDefaultStartup = () => {
    const {image, title, text} = this.props.head.default || {};

    return (
      <div
        className={styles.backgroundStartup}
        style={{
          background: `url(${image}) center center no-repeat`,
        }}
      >
        <div className={styles.defaultBox}>
          <h1 className={styles.defaultStartupTitle}>
            {title}
          </h1>
          <p className={styles.defaultStartupText}>
            {text}
          </p>
        </div>
      </div>
    );
  };

  renderStartup = () => {
    const startups = enhanceCollection(this.context.collection, {
      filter: contents => contents.__filename.startsWith('startups-list'),
    });
    const {image, title, text, link} = startups[this.state.selectedStartupIdx];

    return (
      <div>
        <div className={styles.info}>
          <h1 className={styles.startupTitle}>
            {title}
          </h1>
          <p className={styles.startupText}>
            {text}
          </p>
          <div className={styles.learnMore}>
            <Link to={link}>
              Подробнее &gt;
            </Link>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <div
            className={styles.imageStartup}
            style={{
              background: `url('${image}') center center / contain no-repeat`,
            }}
          />
        </div>
      </div>
    );
  };

  renderContent = () => (
    <div className={styles.content}>
      {this.state.selectedStartupIdx !== null &&
        this.state.selectedStartupIdx !== undefined
        ? this.renderStartup()
        : this.renderDefaultStartup()}
    </div>
  );

  render() {
    const {collection} = this.context;
    const startups = enhanceCollection(collection, {
      filter: contents =>
        contents.__filename && contents.__filename.startsWith('startups-list'),
    });

    return (
      <Page {...this.props}>
        <div className={styles.container}>
          {startups.length
            ? <StartupsHeader
                startups={startups}
                selectedStartupIdx={this.state.selectedStartupIdx}
                onStartupSelect={this.handleStartupSelect}
              />
            : 'No startups yet.'}
        </div>
        {this.renderContent()}
      </Page>
    );
  }
}
StartupsPage.contextTypes = {
  collection: PropTypes.array.isRequired,
};

const EnhancedStartupsPage = pure(StartupsPage);

export default EnhancedStartupsPage;
