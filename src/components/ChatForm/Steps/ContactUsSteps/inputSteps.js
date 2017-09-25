/* @flow */
import React from 'react';

import ValidationUtils from 'utils/ValidationUtils';

import Summary from './Summary';

const PickUp = {
  id: 'pickUpOpt',
  updateId: 'updatePickUp',
  options: (trigger: {|positive: string, negative: string|}) => ({
    id: 'pickUpOpt',
    options: [
      {
        value: 'yes',
        label: 'Yes',
        trigger: trigger.positive,
      },
      {
        value: 'no',
        label: 'No',
        trigger: trigger.negative,
      },
    ],
  }),
  update: (trigger: string) => ({
    id: 'updatePickUp',
    update: 'pickUpOpt',
    trigger,
  }),
};

const Name = {
  id: 'nameInput',
  updateId: 'updateName',
  input: (trigger: string) => ({
    id: 'nameInput',
    user: true,
    trigger,
  }),

  update: (trigger: string) => ({
    id: 'updateName',
    update: 'nameInput',
    trigger,
    validator: value => !!value && value !== '' && value !== ' ',
  }),
};

const ServiceType = {
  id: 'servicesType',
  updateId: 'updateServices',
  options: (trigger: string) => ({
    id: 'servicesType',
    options: [
      {
        value: 'Online courses for iOS and Android development',
        label: 'Online courses for iOS and Android development',
        trigger,
      },
      {
        value: 'Mobile and web apps development services',
        label: 'Mobile and web apps development services',
        trigger,
      },
    ],
  }),
  update: (trigger: string) => ({
    id: 'updateServices',
    update: 'servicesType',
    trigger,
  }),
};

const ConnectionType = {
  id: 'connectionType',
  updateId: 'updateConnectionType',
  options: (params: {
    triggerEmail: string,
    triggerTel: string,
    triggerNo: string,
  }) => ({
    id: 'connectionType',
    options: [
      {value: 'email', label: 'Email', trigger: params.triggerEmail},
      {value: 'tel', label: 'Telephone', trigger: params.triggerTel},
      {
        value: 'no_connection',
        label: 'I do not want to connect',
        trigger: params.triggerNo,
      },
    ],
  }),
  update: (trigger: string) => ({
    id: 'updateConnectionType',
    update: 'connectionType',
    trigger,
  }),
};

const Email = {
  id: 'emailInput',
  updateId: 'updateEmail',
  input: (trigger: string) => ({
    id: 'emailInput',
    user: true,
    trigger,
    validator: value =>
      ValidationUtils.isValidEmail(value) ? true : 'Email not valid',
  }),
  update: (trigger: string) => ({
    id: 'updateEmail',
    update: 'email',
    trigger,
  }),
};

const Tel = {
  id: 'telInput',
  updateId: 'updateEmail',
  input: (trigger: string) => ({
    id: 'telInput',
    user: true,
    trigger,
    validator: value =>
      ValidationUtils.isValidTel(value) ? true : 'Incorrect phone number',
  }),
  update: (trigger: string) => ({
    id: 'updateEmail',
    update: 'tel',
    trigger,
  }),
};

const review = (trigger: string) => ({
  id: 'review',
  component: <Summary />,
  asMessage: true,
  trigger,
});

export {ConnectionType, Email, Name, review, ServiceType, Tel, PickUp};
