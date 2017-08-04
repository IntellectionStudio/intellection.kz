/* @flow */

import {pure} from 'recompact';
import cx from 'classnames';
import React, {Component} from 'react';

import {Button} from 'components';

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

  handleSubmit = event => {
    event.preventDefault();

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
            <h2 className={styles.inputTitle}>ВАШЕ ИМЯ</h2>
            <input
              className={cx(styles.input, {
                [styles.contactDataInput]: true,
              })}
              type="text"
              name="name"
              placeholder={'Denis'}
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </div>

          <div className={styles.inputContainer}>
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

        <div className={styles.submitButtonContainer}>
          <Button containerClassName={styles.submitButtonStyles}>
            <input
              className={styles.submitButtonTitle}
              type="submit"
              value="ОТПРАВИТЬ"
            />
          </Button>
        </div>
      </form>
    );
  }
}

export default pure(ContactUs);
