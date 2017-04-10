/* @flow */

import React from 'react';

import Container from 'components/Container';
import Content from 'components/Content';
import DefaultHeadMeta from 'components/DefaultHeadMeta';
import Footer from 'components/Footer';
import Header from 'components/Header';

import './index.global.css';
import './highlight.global.css';

type PropsType = {
  children?: React$Element<any>,
};

const AppContainer = ({children}: PropsType) => (
  <Container>
    <DefaultHeadMeta />
    <Header />
    <Content>
      {children}
    </Content>
    <Footer />
  </Container>
);

export default AppContainer;
