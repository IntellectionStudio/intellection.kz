/* @flow */

import ChatBot from 'react-simple-chatbot';
import React, {Component} from 'react';
import {ThemeProvider} from 'styled-components';
import cx from 'classnames';

import type {StepsType} from 'types';

import {ContactUsSteps} from './Steps';
import styles from './index.css';

// all available props
const theme = {
  background: '#f5f8fb',
  fontFamily: 'ProximaNova',
  headerBgColor: '#51a9f2',
  headerFontColor: '#fff',
  botBubbleColor: '#51a9f2',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const defineSteps = (stepsType: StepsType) => {
  // TODO: add more steps
  switch (stepsType) {
    default:
      return ContactUsSteps;
  }
};

class ChatForm extends Component {
  state = {
    isChatbotVisible: false,
  };

  componentDidMount() {
    this.showChatBot();
  }

  showChatBot = () => this.setState({isChatbotVisible: true});

  render() {
    const {opened, handleClose, stepsType} = this.props;

    return (
      <div
        className={cx('', {
          [styles.visible]: this.state.isChatbotVisible,
          [styles.notVisible]: !this.state.isChatbotVisible,
        })}
      >
        <ThemeProvider theme={theme}>
          <ChatBot
            key={`chatbot-component-${stepsType}`}
            floating
            botDelay={100}
            // bubbleStyle={bubbleStyle}
            customDelay={100}
            headerTitle="Intellection Bot"
            placeholder="Напишите что нибудь.."
            // headerComponent={ChatFormHeader({handleClose})}
            // hideBotAvatar
            // hideUserAvatar
            opened={opened}
            toggleFloating={handleClose}
            steps={defineSteps(stepsType)}
          />
        </ThemeProvider>
      </div>
    );
  }
}

export default ChatForm;
