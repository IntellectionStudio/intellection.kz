/* @flow */
import {isValidNumber} from 'libphonenumber-js';

const PASSWORD_MIN_LENGTH = 8;

const ValidationUtils = {
  isValidEmail: (candidate: string) =>
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      candidate,
    ),
  isValidPassword: (candidate: string) =>
    candidate.length >= PASSWORD_MIN_LENGTH,
  isValidTel: (candidate: string) => isValidNumber(candidate, 'KZ'),
};

export default ValidationUtils;
