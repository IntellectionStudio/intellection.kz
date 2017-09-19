/* @flow */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Favicon from 'react-favicon';

import {Container, Content, DefaultHeadMeta} from 'components';
import type {StepsType} from 'types';

import 'normalize.css/normalize.css';
import 'react-modal-video/scss/modal-video.scss';
import './index.global.css';
import './highlight.global.css';

/* eslint-disable */
// GOOGLE Analytics, part 1/2
const GOOGLE_ANALYTICS_UA = "UA-73008937-4";
if (typeof window !== "undefined") {
  window.ga =
    window.ga ||
    function() {
      (ga.q = ga.q || []).push(arguments);
    };
  ga.l = +new Date();
  ga("create", GOOGLE_ANALYTICS_UA, "auto");

  ga("require", "cleanUrlTracker");
  ga("require", "eventTracker");
  ga("require", "impressionTracker");
  ga("require", "maxScrollTracker");
  ga("require", "mediaQueryTracker");
  ga("require", "outboundFormTracker");
  ga("require", "outboundLinkTracker");
  ga("require", "pageVisibilityTracker");
  ga("require", "urlChangeTracker");

  ga("send", "pageview");
}
/* eslint-enable */

type PageStateType = {|
  stepsType: StepsType,
  isChatFormOpened: boolean,
|};

class AppContainer extends Component {
  state: PageStateType = {
    isChatFormOpened: false,
    stepsType: '',
  };

  static childContextTypes = {
    handleChatFormClick: PropTypes.func,
    isChatFormOpened: PropTypes.bool,
    stepsType: PropTypes.string,
  };

  getChildContext() {
    return {
      handleChatFormClick: this.handleChatFormClick,
      isChatFormOpened: this.state.isChatFormOpened,
      stepsType: this.state.stepsType,
    };
  }

  handleChatFormClick = (stepsType: StepsType) =>
    this.setState({
      stepsType,
      isChatFormOpened: !this.state.isChatFormOpened,
    });

  render() {
    const {children} = this.props;

    return (
      <Container>
        <Favicon url="https://intellectionstudio.com/assets/icons/favicon.ico" />
        <DefaultHeadMeta
          scripts={[
            // GOOGLE Analytics, part 2/2
            {
              async: true,
              src: 'https://www.google-analytics.com/analytics.js',
            },
            {
              async: true,
              src:
                'https://cdnjs.cloudflare.com/ajax/libs/autotrack/2.4.1/autotrack.js',
            },
          ]}
        />
        <Content>{children}</Content>
      </Container>
    );
  }
}
export default AppContainer;
