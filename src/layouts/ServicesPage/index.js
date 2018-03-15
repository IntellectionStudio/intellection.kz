/* @flow */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Popup from 'react-popup';

import ValidationUtils from 'utils/ValidationUtils';
import Page from 'layouts/Page';

import styles from './index.css';

const MESSAGE_NOT_RECEVIED = 'Message not sent';

const POP_UP_MESSAGE = {
  invalidEmail: () => Popup.alert('invalid email'),
  emptyInput: () => Popup.alert('Please, fill the blanks'),
};

class ServicesPage extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    buttonText: 'START PROJECT',
    disabled: '',
  };

  static contextTypes = {
    handleChatFormClick: PropTypes.func.isRequired,
  };

  handleGetStartedClicked = () => this.context.handleChatFormClick('SERVICES');

  handleChange(property, value) {
    this.setState({[property]: value});
  }
  submit = () => {
    this.submit1();
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
          html: `Name: ${this.state.name} <br />Email: ${
            this.state.email
          } <br />Message: ${this.state.message} <br />`,
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
    this.setState({buttonText: 'MESSAGE SENT! THANK YOU'});
    this.setState({disabled: 'true'});
  };
  render() {
    return (
      <Page {...Page.pickPageProps(this.props)}>
        <div className={styles.container}>
          <div className={styles.intro}>
            <div className={styles.intro1}>
              <h1>Have an idea for new Instagram? We can help you build it</h1>
              <p>
                We offer mobile app and web app development services. Our team
                consists of 15 talented designers and developers, who already
                created more than 20 projects for local and international
                clients.
              </p>
              <h2>Why choose us?</h2>
              <ul className={styles.lists}>
                <li className={styles.list}>
                  We use SCRUM for Agile development
                </li>
                <li className={styles.list}>Quality for us is above all</li>
                <li className={styles.list}>We believe in a good design</li>
                <li className={styles.list}>We charge only 20 USD per hour</li>
              </ul>
            </div>
            <div className={styles.intro2}>
              <div className={styles.form}>
                <h1>Build your digital product today</h1>
                <p className={styles.let12}>and let us help you</p>
                <div className={styles.firstForm}>
                  <div className={styles.nameForm}>
                    <p style={{color: '#a8acb9'}}>YOUR NAME</p>
                    <input
                      id={styles.name}
                      className={styles.textInput}
                      placeholder="name"
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
                    PROJECT DESCRIPTION
                  </p>
                  <textarea
                    value={this.state.message}
                    className={styles.textInput2}
                    placeholder="Tell us more about a project"
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
                OUR PROCESS
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
                <p>Analysis and Planning</p>
              </div>
              <div className={styles.icon1}>
                <div className={styles.circle1} />
                <img
                  className={styles.img1}
                  alt=""
                  src={'/assets/icons/circle2.png'}
                />
                <p>Design</p>
              </div>
              <div className={styles.icon1}>
                <div className={styles.circle1} />
                <img
                  className={styles.img1}
                  alt=""
                  src={'/assets/icons/circle3.png'}
                />
                <p>Development</p>
              </div>
              <div className={styles.icon1}>
                <div className={styles.circle1} />
                <img
                  className={styles.img1}
                  alt=""
                  src={'/assets/icons/circle4.png'}
                />
                <p>Maintenance</p>
              </div>
            </div>
          </div>
          <div className={styles.projects}>
            <div className={styles.ptitle}>
              <h3>Some of our projects</h3>
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
                  Kazakh language learning app for iOS and Android
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
                  News aggregator for Web, iOS and Android
                </p>
              </div>
              <div className={styles.thirdProject}>
                <img
                  className={styles.logo}
                  alt=""
                  src={'/assets/icons/Star_logo.png'}
                />
                <p className={styles.projectName}>I am star!</p>
                <p className={styles.aboutProject}>Online video castings</p>
              </div>
            </div>
            <div className={styles.ssylka}>
              <a className={styles.link} href="/startups">
                learn more
              </a>
            </div>
          </div>
          <div className={styles.prices}>
            <div className={styles.titlePrice}>
              <h3>Pricing</h3>
            </div>
            <div className={styles.pricesBlock}>
              <div className={styles.price}>
                <p className={styles.simple}>Easy apps</p>
                <p>from 100 to 300 hours </p>
                <p>around 5 screens </p>
                <p>one platform </p>
                <p>non-complex functionality </p>
                <p>publish to App Store, Google Play </p>
                <p className={styles.dollar}>$2000-$6000</p>
              </div>
              <div className={styles.price}>
                <p className={styles.simple}>Middle complexity</p>
                <p>from 300 to 800 hours </p>
                <p>around 10 screens </p>
                <p>two or more platforms </p>
                <p>more complex functionality </p>
                <p>publish to App Store, Google Play</p>
                <p className={styles.dollar}>$6000-$16000</p>
              </div>
              <div className={styles.price}>
                <p className={styles.simple}>Complex solutions</p>
                <p>more than 800 hours </p>
                <p>More than 10 screen </p>
                <p>two or more platforms </p>
                <p>Complex functionality </p>
                <p>publish to App Store, Google Play</p>
                <p className={styles.dollar}>{'>'}$16000</p>
              </div>
            </div>
            <button
              className={styles.submit2}
              type="reset"
              value="Reset"
              onClick={this.handleGetStartedClicked}
            >
              START PROJECT
            </button>
          </div>
        </div>

        <Popup />
      </Page>
    );
  }
}

export default ServicesPage;
