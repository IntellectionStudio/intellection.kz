/* @flow */
/* eslint-disable */
import {pure} from 'recompact';
import Popup from 'react-popup';
import React, {Component} from 'react';

import Form from './Form';
import styles from './index.css';

type ContactUsStateType = {|
  isModalOpen: boolean,
  modalContent: string,
|};

const MAND_LINK = 'https://mandrillapp.com/api/1.0/messages/send.json';
const KEY = 'B1AoYTIo1KTLERLF1WOiRg';
const MAND_EMAIL = 'info@intellection.kz';
const INTELLECTION_EMAIL = 'intellection.kz@gmail.com';

const MESSAGE_RECEVIED = 'Сообщение доставлено';
const MESSAGE_NOT_RECEVIED = 'Сообщение не доставлено';

class ContactUs extends Component {
  state: ContactUsStateType = {
    isModalOpen: false,
    modalContent: 'Message recevied',
  };

  handleSubmit = (messageParams: {
    email: string,
    message: string,
    name: string,
  }) => {
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
          html: `Name: ${messageParams.name}<br/>Email: ${
            messageParams.email
          }<br/>Message: ${messageParams.message}`,
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
          <h1 className={styles.title}>Get in touch</h1>
        </div>

        <Form onSubmitButtonPress={this.handleSubmit} />

        <Popup />
      </div>
    );
  }
}

export default pure(ContactUs);
