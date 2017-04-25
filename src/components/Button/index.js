/* @flow */

import cx from 'classnames';
import React from 'react';

import styles from './index.css';

type PropsType = {|
  className?: string,
  secondary?: boolean,
  light?: boolean,
  big?: boolean,
|};

const Button = ({
  className,
  secondary = false,
  light = false,
  big = false,
  ...otherProps
}: PropsType) => (
  <span
    role="button"
    {...otherProps}
    className={cx(className, {
      [styles.button]: true,
      [styles.secondary]: secondary,
      [styles.light]: light,
      [styles.big]: big,
    })}
  />
);

Button.displayName = 'Button';

export default Button;
