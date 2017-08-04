import {pure} from 'recompact';
import React, {Component} from 'react';

import styles from './index.css';

class Contact extends Component {
  config = [
    {
      title: 'ADDRESS',
      content: ['30A/3 Satpayev str.  Almaty 050000, Kazakhstan'],
    },
    {
      title: 'E-MAIL',
      content: ['info@intellection.kz'],
    },
    {
      title: 'TELEPHONE',
      content: ['+7 (747) 153 82 30'],
    },
  ];

  renderContent = item => (
    <div className={styles.itemContainer}>
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

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            Контакты
          </h1>
        </div>

        {this.config.map(item => this.renderContent(item))}
      </div>
    );
  }
}

export default pure(Contact);
