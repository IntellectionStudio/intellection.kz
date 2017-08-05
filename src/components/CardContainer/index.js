import {pure} from 'recompact';
import React from 'react';
import cx from 'classnames';

import styles from './index.css';

const CardContainer = ({children, containerClassName}) => (
  <div
    className={cx(styles.container, {
      [containerClassName]: !!containerClassName,
    })}
  >
    {children}
  </div>
);

export default pure(CardContainer);
