/* @flow */

import type {HeaderLinkType} from 'types';

type ConfigType = {
  headerLinks: Array<HeaderLinkType>,
};

const config: ConfigType = {
  headerLinks: [
    {
      title: 'О нас',
      path: '/about',
    },
    {
      title: 'Наши стартапы',
      path: '/',
    },
    {
      title: 'Курсы',
      path: '/',
    },
    {
      title: 'Knowledge Base',
      path: '/',
    },
    {
      title: 'Наше видео',
      path: '/',
    },
    {
      title: 'Блог',
      path: '/',
    },
  ],
};

export default config;
