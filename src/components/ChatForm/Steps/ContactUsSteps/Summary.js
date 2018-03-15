/* @flow */

import React, {Component} from 'react';
import Popup from 'react-popup';

type SummaryStateType = {|
  connection: string,
  email: string,
  name: string,
  servicesType: string,
  tel: string,
|};

const MAND_LINK = 'https://mandrillapp.com/api/1.0/messages/send.json';
const KEY = 'B1AoYTIo1KTLERLF1WOiRg';
const MAND_EMAIL = 'info@intellection.kz';
const INTELLECTION_EMAIL = 'intellection.kz@gmail.com';

const MESSAGE_RECEVIED = 'Message delivered';
const MESSAGE_NOT_RECEVIED = 'Message not delivered';

class Summary extends Component {
  state: SummaryStateType = {
    connection: '',
    email: '',
    name: '',
    servicesType: '',
    tel: '',
  };

  sendMessage = (messageParams: {
    name: string,
    servicesType: string,
    contact: string,
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
          subject: `CONTACT US FORM (intellectionstudio.com) ${
            messageParams.name
          } ${messageParams.contact}`,
          html: `Name: ${messageParams.name}<br/>Contact: ${
            messageParams.contact
          }<br/>Message: ${messageParams.servicesType}`,
        },
      }),
    })
      .then(() => Popup.alert(MESSAGE_RECEVIED)) // eslint-disable-line promise/prefer-await-to-then
      .catch(() => Popup.alert(MESSAGE_NOT_RECEVIED));
  };

  render() {
    const {steps} = this.props;
    const {
      connectionType,
      emailInput,
      nameInput,
      servicesType,
      telInput,
    } = steps;

    this.sendMessage({
      contact: (telInput && telInput.value) || (emailInput && emailInput.value),
      name: nameInput.value,
      servicesType: servicesType.value,
    });

    return (
      <div style={{width: '100%'}}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{nameInput.value}</td>
            </tr>
            <tr>
              <td>Connection</td>
              <td>{connectionType.value}</td>
              <td>
                {(telInput && telInput.value) ||
                  (emailInput && emailInput.value)}
              </td>
            </tr>
            <tr>
              <td>Service type</td>
              <td>{servicesType.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Summary;
