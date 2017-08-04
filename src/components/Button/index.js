import {pure} from 'recompact';
import React from 'react';
import cx from 'classnames';

import styles from './index.css';

const Button = ({children, containerClassName}) => (
  <div
    className={cx(styles.root, {
      [containerClassName]: !!containerClassName,
    })}
  >
    {children}
  </div>
);

export default pure(Button);
