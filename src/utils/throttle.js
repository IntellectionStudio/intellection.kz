import {curry} from 'ramda';

const DEFAULT_THRESHOLD = 250;

const throttle = curry((fn, threshhold = DEFAULT_THRESHOLD) => {
  let last;
  let deferTimer;

  return () => {
    const now = Number(new Date());

    if (last && now < last + threshhold) {
      clearTimeout(deferTimer);

      deferTimer = setTimeout(() => {
        last = now;
        fn(arguments);
      }, threshhold);
    } else {
      last = now;
      fn(arguments);
    }
  };
});

export default throttle;
