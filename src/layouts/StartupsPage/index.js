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
  // $FlowFixMe
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
    const {image, title, text, link} = startups[startupToShow];
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
        <div className={styles.imageBackground}>
          <img className={styles.imageStartup} src={image} alt={`images`} />
        </div>
      </div>
    );
  }
  /*    <div
        className={styles.backgroundStartup}
        style={{
          background: `url(${image}) center center no-repeat`,
        }}
      />*/
  render() {
    const {collection} = this.context;
    //  console.log(collection);
    const startups = enhanceCollection(collection, {
      filter: contents => contents.__filename.startsWith('startups-list'),
    });
    //  console.log('bla bla bla', startups.length);
    // console.log('bla bla bla', startups);
    return (
      <Page {...this.props}>
        <div className={styles.container}>
          {startups.length
            ? <StartupsHeader
                setStartup={this.setStartup}
                startups={startups}
              />
            : 'No posts yet.'}
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
