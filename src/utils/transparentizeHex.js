/* @flow */

import R from 'ramda';

/* eslint-disable no-bitwise, no-magic-numbers */
const transparentizeHex = (hex: string, a: number) => {
  let bigint = 0;
  const hexWithoutHash = R.replace('#')('')(hex);

  return `rgba(${[(bigint = parseInt(hexWithoutHash, 16)) >> 16 & 255, bigint >> 8 & 255, bigint & 255, a].join(',')})`;
};
/* eslint-enable no-bitwise, no-magic-numbers */

export default transparentizeHex;
