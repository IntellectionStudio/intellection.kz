import {pick} from 'ramda';
import Helmet from 'react-helmet';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Loading from 'components/Loading';
import ChatForm from 'components/ChatForm';

import styles from './index.css';

class Page extends Component {
  state = {isOpen: false};

  handleContactUs = () => this.context.handleChatFormClick('');

  render() {
    const {__url, head, children, isLoading} = this.props;
    const {pkg} = this.context.metadata;
    const meta = [
      {property: 'og:type', content: 'article'},
      {property: 'og:title', content: head.title},
      {
        property: 'og:url',
        content: 'https://intellection.kz',
      },
      // {property: 'og:image', content: socialImage},
      {property: 'og:description', content: head.description},
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:title', content: head.title},
      {
        name: 'twitter:creator',
        content: `@${pkg.twitter}`,
      },
      {name: 'twitter:description', content: head.description},
      // {name: 'twitter:image', content: socialImage},
      {name: 'description', content: head.description},
      {name: 'title', content: head.title},
    ];

    const {stepsType, isChatFormOpened} = this.context;

    return (
      <div className={styles.page}>
        <Helmet title={head.title} meta={meta}>
          <link
            rel="shortcut-icon"
            type="image/x-icon"
            href="/assets/icons/favicon.ico"
          />
        </Helmet>
        {isLoading ? (
          <Loading />
        ) : (
          <div className={styles.wrapper}>
            <Header white={__url !== '/'} />
            {children}

            <Footer homepage={__url === '/'} />
          </div>
        )}

        <div className={styles.chatForm}>
          <ChatForm
            stepsType={stepsType}
            opened={isChatFormOpened}
            handleClose={this.handleContactUs}
          />
        </div>
      </div>
    );
  }
}

Page.contextTypes = {
  handleChatFormClick: PropTypes.func.isRequired,
  isChatFormOpened: PropTypes.bool.isRequired,
  stepsType: PropTypes.string.isRequired,
  metadata: PropTypes.object.isRequired,
};

Page.pickPageProps = props =>
  pick(['__filename', '__url', 'head'])({
    ...props,
    head: pick(['title', 'description', 'footer', 'children'])(props.head),
  });

export default Page;
