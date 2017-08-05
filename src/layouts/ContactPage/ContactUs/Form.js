/* @flow */

import {pure} from 'recompact';
import cx from 'classnames';
import Popup from 'react-popup';
import React, {Component} from 'react';

import {Button} from 'components';
import ValidationUtils from 'utils/ValidationUtils';

import styles from './form.css';

type ContactUsOwnPropsType = {|
  onSubmitButtonPress: (messageParams: {
    email: string,
    message: string,
    name: string,
  }) => void,
|};

type ContactUsStateType = {|
  email: string,
  message: string,
  name: string,
|};

const FORM_CONTENT = {
  name: {
    title: 'Ваше имя',
    placeholder: 'Denis',
  },
  email: {
    title: 'Ваш email',
    placeholder: 'johndoe@gmail.com',
  },
  message: {
    title: 'Ваше сообщение',
  },
};

const POP_UP_MESSAGE = {
  invalidEmail: () => Popup.alert('Не правильный email'),
  emptyInput: () => Popup.alert('Заполните все поля'),
};

class ContactUs extends Component {
  props: ContactUsOwnPropsType;

  state: ContactUsStateType = {
    email: '',
    message: '',
    name: '',
  };

  handleNameChange = event => this.setState({name: event.target.value});
  handleEmailChange = event => this.setState({email: event.target.value});
  handleMessageChange = event => this.setState({message: event.target.value});

  validInput = (): boolean =>
    ValidationUtils.isValidEmail(this.state.email) &&
    this.state.message &&
    this.state.name;

  handleSubmit = event => {
    event.preventDefault();

    if (!this.validInput()) {
      POP_UP_MESSAGE.emptyInput();
      return;
    }

    this.props.onSubmitButtonPress({
      email: this.state.email,
      message: this.state.message,
      name: this.state.name,
    });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <div className={styles.contactDataContainer}>
          <div className={styles.inputContainer}>
            <h2 className={styles.inputTitle}>
              {FORM_CONTENT.name.title.toUpperCase()}
            </h2>
            <input
              className={cx(styles.input, {
                [styles.contactDataInput]: true,
              })}
              type="text"
              name="name"
              placeholder={FORM_CONTENT.name.placeholder}
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </div>

          <div className={styles.inputContainer}>
            <h2 className={styles.inputTitle}>
              {FORM_CONTENT.email.title.toUpperCase()}
            </h2>
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder={FORM_CONTENT.email.placeholder}
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div>
        </div>

        <div>
          <h2 className={styles.inputTitle}>
            {FORM_CONTENT.message.title.toUpperCase()}
          </h2>
          <textarea
            className={cx(styles.input, {
              [styles.textArea]: true,
            })}
            name="message"
            value={this.state.message}
            onChange={this.handleMessageChange}
          />
        </div>

        <div className={styles.submitButtonContainer}>
          <Button
            params={{
              containerClassName: styles.submitButtonStyles,
              inputClassName: styles.submitButtonTitle,
              type: 'submit',
              value: 'ОТПРАВИТЬ',
            }}
          />
        </div>
      </form>
    );
  }
}

export default pure(ContactUs);
