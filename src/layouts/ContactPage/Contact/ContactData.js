/* @flow */

import {pure} from 'recompact';
import React, {Component} from 'react';
import cx from 'classnames';

import styles from './contactData.css';

class Contact extends Component { // eslint-disable-line
  // determineOrder = (order: number) => {
  //   /* eslint-disable no-magic-numbers */
  //   switch (order) {
  //     case 1:
  //       return {[styles.itemOrder1]: true};
  //     case 2:
  //       return {[styles.itemOrder2]: true};
  //     case 3:
  //       return {[styles.itemOrder3]: true};
  //     default:
  //       return {};
  //   }
  //   /* eslint-enable no-magic-numbers */
  // };

  render() {
    const {item} = this.props;

    return (
      <div className={cx(styles.itemContainer, {})}>
        <div className={styles.itemTitleContainer}>
          <h2 className={styles.itemTitle} key={item}>{item.title}</h2>
        </div>

        <div className={styles.itemContentContainer}>
          {item.content.map(content => (
            <h2 className={styles.itemContent} key={content}>{content}</h2>
          ))}
        </div>
      </div>
    );
  }
}

export default pure(Contact);
