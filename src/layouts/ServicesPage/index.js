/* @flow */

import React, {Component} from 'react';
import Popup from 'react-popup';

import ValidationUtils from 'utils/ValidationUtils';
import Page from 'layouts/Page';

import styles from './index.css';

const MESSAGE_NOT_RECEVIED = 'Сообщение не доставлено';

const POP_UP_MESSAGE = {
  invalidEmail: () => Popup.alert('Не правильный email'),
  emptyInput: () => Popup.alert('Заполните все поля'),
};

class ServicesPage extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    buttonText: 'НАЧАТЬ ПРОЕКТ',
    disabled: '',
  };

  handleChange = (property, value) => {
    this.setState({[property]: value});
  };

  validInput = (): boolean =>
    ValidationUtils.isValidEmail(this.state.email) &&
    this.state.message &&
    this.state.name;

  handleSubmit = () => {
    if (!ValidationUtils.isValidEmail(this.state.email)) {
      POP_UP_MESSAGE.invalidEmail();
      return;
    }

    if (!this.validInput()) {
      POP_UP_MESSAGE.emptyInput();
      return;
    }

    this.sendMessage();
  };
  sendMessage = () => {
    fetch('https://mandrillapp.com/api/1.0/messages/send.json', {
      method: 'POST',
      body: JSON.stringify({
        key: 'B1AoYTIo1KTLERLF1WOiRg',
        message: {
          from_email: 'info@intellection.kz',
          to: [
            {
              email: 'intellection.kz@gmail.com',
              type: 'to',
            },
          ],
          subject: 'APPLICATION FORM (intellection.kz)',
          html: `Name: ${this.state.name} <br />Email: ${this.state
            .email} <br />Message: ${this.state.message} <br />`,
        },
      }),
    })
      .then(() => this.success()) // eslint-disable-line promise/prefer-await-to-then
      .catch(() => Popup.alert(MESSAGE_NOT_RECEVIED));
  };
  success = () => {
    this.setState({email: ''});
    this.setState({name: ''});
    this.setState({message: ''});
    this.setState({buttonText: 'SUCCESSFULLY CREATED'});
    this.setState({disabled: 'true'});
  };
  render() {
    return (
      <Page {...Page.pickPageProps(this.props)}>
        <div className={styles.container}>
          <div className={styles.intro}>
            <div className={styles.intro1}>
              <h1>Придумали новый Instagram? Мы построим его для вас</h1>
              <p>
                Мы предлагаем услуги разработки мобильных приложений и
                веб-сайтов любой сложности. Наша команда состоит из 15-ти
                одаренных программистов и дизайнеров, которые уже создали более
                20 проектов для местных и зарубежных клиентов.
              </p>
              <h2>Почему именно мы?</h2>
              <ul className={styles.lists}>
                <li className={styles.list}>
                  Итеративный процесс разработки (Agile)
                </li>
                <li className={styles.list}>Для нас качество выше цены</li>
                <li className={styles.list}>У нас самый лучший дизайн</li>
                <li className={styles.list}>
                  Абсолютная прозрачность ценообразования
                </li>
              </ul>
            </div>
            <div className={styles.intro2}>
              <div className={styles.form}>
                <h1>Создайте свой цифровой продукт сегодня</h1>
                <p className={styles.let12}>
                  Позвольте нам воплотить вашу идею в реальность
                </p>
                <div className={styles.firstForm}>
                  <div className={styles.nameForm}>
                    <p style={{color: '#a8acb9'}}>ВАШЕ ИМЯ</p>
                    <input
                      id={styles.name}
                      className={styles.textInput}
                      placeholder="Имя"
                      value={this.state.name}
                      onChange={a => this.handleChange('name', a.target.value)}
                    />
                  </div>
                  <div className={styles.emailForm}>
                    <p style={{color: '#a8acb9'}}>EMAIL</p>
                    <input
                      id={styles.email}
                      type="email"
                      className={styles.textInput3}
                      placeholder="example@gmail.com"
                      value={this.state.email}
                      onChange={b => this.handleChange('email', b.target.value)}
                    />
                  </div>
                </div>
                <div className={styles.secondForm} />
                <div className={styles.messageInput}>
                  <p
                    style={{
                      color: '#a8acb9',
                      textAlign: 'left',
                      marginTop: '23px',
                    }}
                  >
                    ОПИШИТЕ ВАШ ПРОЕКТ
                  </p>
                  <textarea
                    value={this.state.message}
                    className={styles.textInput2}
                    placeholder="Опишите проект в 2-3 предложениях. Напишите, что вам требуется: мобильное приложение, веб-сайт, игра на Unity, проект по виртуальной реальности, искусственный интеллект..."
                    rows="7"
                    cols="50"
                    name="comment"
                    form="usrform"
                    id="comment"
                    onChange={c => this.handleChange('message', c.target.value)}
                  />
                  <input
                    type="button"
                    id={styles.submit}
                    value={this.state.buttonText}
                    onClick={this.handleSubmit}
                    disabled={this.state.disabled}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.process}>
            <div className={styles.process1}>
              <h3
                style={{
                  textAlign: 'center',
                  paddingTop: '33px',
                }}
              >
                Процесс
              </h3>
            </div>
            <div className={styles.process2}>
              <div className={styles.icon1}>
                <div className={styles.circle1}>
                  <img
                    className={styles.img1}
                    alt=""
                    src={'/assets/icons/circle1.png'}
                  />
                </div>
                <p>Анализ и планирование</p>
              </div>
              <div className={styles.icon1}>
                <div className={styles.circle1} />
                <img
                  className={styles.img1}
                  alt=""
                  src={'/assets/icons/circle2.png'}
                />
                <p>Дизайн</p>
              </div>
              <div className={styles.icon1}>
                <div className={styles.circle1} />
                <img
                  className={styles.img1}
                  alt=""
                  src={'/assets/icons/circle3.png'}
                />
                <p>Разработка</p>
              </div>
              <div className={styles.icon1}>
                <div className={styles.circle1} />
                <img
                  className={styles.img1}
                  alt=""
                  src={'/assets/icons/circle4.png'}
                />
                <p>Поддержка</p>
              </div>
            </div>
          </div>
          <div className={styles.projects}>
            <div className={styles.ptitle}>
              <h3>Некоторые наши проекты</h3>
            </div>
            <div className={styles.projectsName}>
              <div className={styles.firstProject}>
                <img
                  className={styles.logo}
                  alt=""
                  src={'/assets/icons/Qazaq__logo.png'}
                />
                <p className={styles.projectName}>Qazaq App</p>
                <p className={styles.aboutProject}>
                  Приложение по изучению казахского языка
                </p>
              </div>
              <div className={styles.secondProject}>
                <img
                  className={styles.logoFenix}
                  alt=""
                  src={'/assets/icons/Fenix_logo.png'}
                />
                <p className={styles.projectName}>Fenix News</p>
                <p className={styles.aboutProject}>
                  Агрегатор новостных сайтов
                </p>
              </div>
              <div className={styles.thirdProject}>
                <img
                  className={styles.logo}
                  alt=""
                  src={'/assets/icons/Star_logo.png'}
                />
                <p className={styles.projectName}>Я звезда!</p>
                <p className={styles.aboutProject}>
                  Проведение кастингов и конкурсов онлайн
                </p>
              </div>
            </div>
            <div className={styles.ssylka}>
              <a className={styles.link} href="/startups">
                посмотреть все
              </a>
            </div>
          </div>
          <div className={styles.prices}>
            <div className={styles.titlePrice}>
              <h3>Примерные цены</h3>
            </div>
            <div className={styles.pricesBlock}>
              <div className={styles.price}>
                <p className={styles.simple}>Базовый функционал</p>
                <p>от 100 до 300 часов работы </p>
                <p>Около 5-ти экранов </p>
                <p>Одна платформа </p>
                <p>Несложный функционал </p>
                <p>Публикация на рынках App Store, Google Play </p>
                <p className={styles.dollar}>$1000-$4000</p>
              </div>
              <div className={styles.price}>
                <p className={styles.simple}>Средняя сложность</p>
                <p>от 300 до 800 часов работы </p>
                <p>Около 10-ти экранов </p>
                <p>Несколько платформ </p>
                <p>Более сложный функционал </p>
                <p>Публикация на рынках App Store, Google Play </p>
                <p className={styles.dollar}>$4000-$12000</p>
              </div>
              <div className={styles.price}>
                <p className={styles.simple}>Сложное решение</p>
                <p>Более 800 часов работы </p>
                <p>Более 10-ти экранов </p>
                <p>Несколько платформ </p>
                <p>Сложный функционал </p>
                <p>Публикация на рынках App Store, Google Play </p>
                <p className={styles.dollar}>$12000</p>
              </div>
            </div>
            <button
              className={styles.submit2}
              type="reset"
              value="Reset"
              onClick={this.submit}
            >
              НАЧАТЬ ПРОЕКТ
            </button>
          </div>
        </div>

        <Popup />
      </Page>
    );
  }
}

export default ServicesPage;
