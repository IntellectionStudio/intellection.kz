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
        label: 'Да',
        trigger: trigger.positive,
      },
      {
        value: 'no',
        label: 'Нет',
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
        value: 'Дистанционные курсы iOS или Android',
        label: 'Дистанционные курсы iOS или Android',
        trigger,
      },
      {
        value: 'Услуги разработки мобильных приложений и веб-сайтов',
        label: 'Услуги разработки мобильных приложений и веб-сайтов',
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
      {value: 'tel', label: 'Телефон', trigger: params.triggerTel},
      {
        value: 'no_connection',
        label: 'Лучше со мной не связываться',
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
      ValidationUtils.isValidTel(value) ? true : 'Неправильный номер телефона',
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
