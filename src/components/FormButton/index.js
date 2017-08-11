import {pure} from 'recompact';
import React from 'react';
import cx from 'classnames';

import styles from './index.css';

const FormButton = ({
  params: {type, value, containerClassName, inputClassName},
}) =>
  <div
    className={cx(styles.root, {
      [containerClassName]: !!containerClassName,
    })}
  >
    <input className={inputClassName} type={type} value={value} />
  </div>;

export default pure(FormButton);
