/* @flow */

import {pure} from 'recompact';
import cx from 'classnames';
import Popup from 'react-popup';
import React, {Component} from 'react';

import styles from './index.css';

type ContactUsStateType = {|
  email: string,
  isModalOpen: boolean,
  message: string,
  modalContent: string,
  name: string,
|};

const MAND_LINK = 'https://mandrillapp.com/api/1.0/messages/send.json';
const KEY = 'B1AoYTIo1KTLERLF1WOiRg';
const MAND_EMAIL = 'info@intellection.kz';
const INTELLECTION_EMAIL = 'intellection.kz@gmail.com';

const MESSAGE_RECEVIED = 'Сообщение доставлено';
const MESSAGE_NOT_RECEVIED = 'Сообщение не доставлено';

class ContactUs extends Component {
  state: ContactUsStateType = {
    email: '',
    isModalOpen: false,
    message: '',
    modalContent: 'Message recevied',
    name: '',
  };

  handleNameChange = event => this.setState({name: event.target.value});

  handleEmailChange = event => this.setState({email: event.target.value});

  handleMessageChange = event => this.setState({message: event.target.value});

  handleSubmit = event => {
    event.preventDefault();
    fetch(MAND_LINK, {
      method: 'POST',
      body: JSON.stringify({
        key: KEY,
        message: {
          from_email: MAND_EMAIL,
          to: [
            {
              email: INTELLECTION_EMAIL,
              type: 'to',
            },
          ],
          subject: 'CONTACT US FORM (intellection.kz)',
          html: `Name: ${this.state.name}<br/>Email: ${this.state.email}<br/>Message: ${this.state.message}`,
        },
      }),
    })
      .then(() => Popup.alert(MESSAGE_RECEVIED)) // eslint-disable-line promise/prefer-await-to-then
      .catch(() => Popup.alert(MESSAGE_NOT_RECEVIED));
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            Свяжитесь с нами
          </h1>
        </div>

        <form className={styles.form} onSubmit={this.handleSubmit}>
          <div>
            <h2 className={styles.inputTitle}>ВАШЕ ИМЯ</h2>
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder={'Denis'}
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </div>

          <div>
            <h2 className={styles.inputTitle}>ВАШЕ EMAIL</h2>
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder={'johndoe@gmail.com'}
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div>

          <div>
            <h2 className={styles.inputTitle}>ВАШЕ СООБЩЕНИЕ</h2>
            <textarea
              className={cx(styles.input, {
                [styles.textArea]: true,
              })}
              name="message"
              value={this.state.message}
              onChange={this.handleMessageChange}
            />
          </div>

          <input type="submit" value="Submit" />
        </form>

        <Popup />
      </div>
    );
  }
}

export default pure(ContactUs);
