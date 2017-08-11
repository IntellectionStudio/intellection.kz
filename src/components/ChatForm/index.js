/* @flow */

import ChatBot from 'react-simple-chatbot';
import React from 'react';

import type {StepsType} from 'types';

import {ContactUsSteps} from './Steps';
import ChatFormHeader from './ChatFormHeader';

const bubbleStyle = {
  fontFamily: 'ProximaNova',
  background: '#51a9f2',
};

const defineSteps = (stepsType: StepsType): Object => {
  switch (stepsType) {
    default:
      return ContactUsSteps;
  }
};

const ChatForm = ({opened, handleClose, stepsType}) =>
  <ChatBot
    key={`chatbot-component-${stepsType}`}
    floating
    botDelay={100}
    bubbleStyle={bubbleStyle}
    customDelay={100}
    headerComponent={ChatFormHeader({handleClose})}
    hideBotAvatar
    hideUserAvatar
    opened={opened}
    toggleFloating={handleClose}
    steps={defineSteps(stepsType)}
  />;

export default ChatForm;
