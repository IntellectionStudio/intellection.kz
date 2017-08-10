import {
  ConnectionType,
  Email,
  Name,
  review,
  ServiceType,
  Tel,
} from './inputSteps';

export default [
  {
    id: 1,
    message: 'Здравствуйте! Меня зовут Intellection и я хотел бы с Вами пообщаться',
    trigger: 'name',
  },
  {
    id: 'name',
    message: 'Для начала, как Вас зовут?',
    trigger: Name.id,
  },
  Name.input('services'),
  {
    id: 'services',
    message: 'Что вас интересует?',
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
    message: 'Спасибо! Мне было очень приятно с вами поговорить!',
    end: true,
  },
];
