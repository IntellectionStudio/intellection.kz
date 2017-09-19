/* @flow */

import ChatBot from 'react-simple-chatbot';
import React from 'react';
import {ThemeProvider} from 'styled-components';

import type {StepsType} from 'types';

import {ContactUsSteps} from './Steps';

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

const defineSteps = (stepsType: StepsType): Object => {
  // TODO: add more steps
  switch (stepsType) {
    default:
      return ContactUsSteps;
  }
};

const ChatForm = ({opened, handleClose, stepsType}) =>
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
  </ThemeProvider>;

export default ChatForm;
