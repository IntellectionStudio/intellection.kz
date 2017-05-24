/* @flow */

import {pure} from 'recompact';
import React from 'react';

import styles from './index.css';

type ContainerOwnPropsType = {|
  children?: React$Element<any>,
|};

const Container = ({children}) => (
  <div className={styles.container}>
    {children}
  </div>
);

const EnhancedContainer: EnhancedComponentType<ContainerOwnPropsType> = pure(
  Container,
);

export default EnhancedContainer;
