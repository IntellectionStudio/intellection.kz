import enhanceCollection from 'phenomic/lib/enhance-collection';
import React, {PropTypes, Component} from 'react';
import {Link} from 'phenomic';

import StartupsHeader from 'components/StartupsHeader';
import Page from 'layouts/Page';

import styles from './index.css';

class StartupsPage extends Component {
  props;
  state = {
    startupToShow: null,
  };
  setStartup = startupToShow => this.setState({startupToShow});
  renderContent() {
    const {collection} = this.context;
    const startups = enhanceCollection(collection, {
      filter: contents => contents.__filename.startsWith('startups-list'),
    });

    const defaultCase = enhanceCollection(collection, {
      filter: contents => contents.__filename.startsWith('default-startups'),
    });
    const {startupToShow} = this.state;
    if (startupToShow == null) {
      const {image, title, text} = defaultCase[0];
      return (
        <div className={styles.content}>
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
        </div>
      );
    }
    const {image, title, text, link} = startups.filter(
      startup => startup.title === this.state.startupToShow,
    )[0];

    return (
      <div className={styles.content}>
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
  }
  render() {
    const {collection} = this.context;
    const startups = enhanceCollection(collection, {
      filter: contents => contents.__filename.startsWith('startups-list'),
    });

    return (
      <Page {...this.props}>
        <div className={styles.container}>
          {startups.length
            ? <StartupsHeader
                setStartup={this.setStartup}
                startups={startups}
                selectedStartup={this.state.startupToShow}
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

export default StartupsPage;
