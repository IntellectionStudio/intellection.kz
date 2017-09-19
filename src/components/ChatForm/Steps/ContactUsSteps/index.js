import {
  ConnectionType,
  Email,
  Name,
  PickUp,
  review,
  ServiceType,
  Tel,
} from './inputSteps';

const steps = [
  {
    id: 1,
    message:
      'Здравствуйте! Меня зовут Intellection Bot и я рад приветствовать Вас на нашем сайте.',
    trigger: 'pickUp',
  },
  {
    id: 'pickUp',
    message: 'Можно с Вами познакомиться?',
    trigger: PickUp.id,
  },
  PickUp.options({
    positive: 'name',
    negative: 'end-message',
  }),
  {
    id: 'name',
    message: 'Как Вас зовут?',
    trigger: Name.id,
  },
  Name.input('services'),
  {
    id: 'services',
    message: 'Что Вас интересует? (Нажмите на правильный вариант ответа)',
    trigger: ServiceType.id,
  },
  ServiceType.options('connection'),
  {
    id: 'connection',
    message: 'Как нам с вами лучше связаться?',
    trigger: ConnectionType.id,
  },
  ConnectionType.options({
    triggerEmail: 'email',
    triggerTel: 'tel',
    triggerNo: 'no_connection',
  }),
  {
    id: 'no_connection',
    message: ')))',
    trigger: ConnectionType.id,
  },
  {
    id: 'email',
    message: 'Можно ваш e-mail?',
    trigger: Email.id,
  },
  Email.input('review'),
  {
    id: 'tel',
    message: 'Можно ваш телефон?',
    trigger: Tel.id,
  },
  Tel.input('review'),
  review('end-message'),
  {
    id: 'end-message',
    message:
      'Спасибо! Кто нибудь из нашей команды обязательно с Вами свяжется.Если вы желаете отправить форму заново просто перезагрузите страницу.',
    end: true,
  },
];

export default steps;
