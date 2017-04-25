/* @flow */

import {addLocaleData} from 'react-intl';

import flattenObject from 'utils/flattenObject';

const locales = ['ru', 'en'];

/* eslint-disable import/no-dynamic-require, global-require */
locales.forEach((locale: string) =>
  addLocaleData(require(`react-intl/locale-data/${locale}`)),
);

const getMessages = (locale: string) =>
  flattenObject(require(`../locales/${locale}.json`));
/* eslint-enable import/no-dynamic-require, global-require */

const getIntlForLocale = (localeCandidate: string) => {
  const locale = locales.includes(localeCandidate)
    ? localeCandidate
    : locales[0];

  return {
    locale,
    messages: getMessages(locale),
    defaultLocale: locales[0],
  };
};

export default getIntlForLocale;
