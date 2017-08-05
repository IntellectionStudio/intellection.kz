/* @flow */

import {pure} from 'recompact';
import React, {Component} from 'react';

import ContactData from './ContactData';
import styles from './index.css';

class Contact extends Component {
  config = [
    {
      order: 1,
      title: 'ADDRESS',
      content: ['30A/3 Satpayev str.  Almaty 050000, Kazakhstan'],
    },
    {
      order: 2,
      title: 'E-MAIL',
      content: ['info@intellection.kz'],
    },
    {
      order: 3,
      title: 'TELEPHONE',
      content: ['+7 (747) 153 82 30'],
    },
  ];

  renderContent = item => <ContactData item={item} />;

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            Контакты
          </h1>
        </div>

        <div className={styles.itemsContainer}>
          {this.config.map(item => this.renderContent(item))}
        </div>
      </div>
    );
  }
}

export default pure(Contact);
