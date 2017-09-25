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
      'Good day! My name is Intellection Bot and I would like to welcome you at our website!',
    trigger: 'pickUp',
  },
  {
    id: 'pickUp',
    message: 'Do you want to tell me a little more about yourself?',
    trigger: PickUp.id,
  },
  PickUp.options({
    positive: 'name',
    negative: 'end-message',
  }),
  {
    id: 'name',
    message: 'What is your name?',
    trigger: Name.id,
  },
  Name.input('services'),
  {
    id: 'services',
    message: 'What are you interested in? (Please, press the correct answer)',
    trigger: ServiceType.id,
  },
  ServiceType.options('connection'),
  {
    id: 'connection',
    message: 'What is the best way to connect with you?',
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
    message: 'Please, give us your e-mail',
    trigger: Email.id,
  },
  Email.input('review'),
  {
    id: 'tel',
    message: 'Please, give us your phone number',
    trigger: Tel.id,
  },
  Tel.input('review'),
  review('end-message'),
  {
    id: 'end-message',
    message:
      'Thank you! Somebody from our team will be in touch soon! Refresh the page to send a form again',
    end: true,
  },
];

export default steps;
