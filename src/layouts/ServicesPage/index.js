import React, {Component} from 'react';

import Page from 'layouts/Page';

import styles from './index.css';

class ServicesPage extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    buttonText: 'GET STARTED WITH YOUR IDEA',
    disabled: '',
  };

  handleChandle(property, value) {
    this.setState({[property]: value});
    console.log(this.state.name, this.state.email, this.state.message);
  }
  submit = () => {
    this.submit1();
  };
  submit1 = () => {
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
          html: `Name: ${this.state.name} <br />Email: ${this.state.email} <br />Message: ${this.state.message} <br />`,
        },
      }),
    })
      .then((res) =>  // eslint-disable-line
        this.success()
      ) // eslint-disable-line promise/prefer-await-to-then
      .catch(err => {
        // TODO
        console.log(err);
      });
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
              <h1>
                Have an Uber like App idea?
              </h1>
              <h1> We can power it </h1>
              <p>
                As experts in this space,
                we understand the core technology
                that will make your On Demand Idea click.
                We are dedicated to deliver fully customized
                solutions and develop Uber clones for your specific business model.
              </p>
              <h2>
                Why choose us?
              </h2>
              <ul className={styles.lists}>
                <li className={styles.list}>
                  Вы научитесь писать код
                </li>
                <li className={styles.list}>
                  Вы научитесь писать код
                </li>
                <li className={styles.list}>
                  Вы научитесь писать код
                </li>
                <li className={styles.list}>
                  Вы научитесь писать код
                </li>
              </ul>
            </div>
            <div className={styles.intro2}>
              <div className={styles.form}>
                <h1>Create your Marketplace App</h1>
                <p>Let Juggernaut power your On-Demand App</p>
                <div className={styles.firstForm}>
                  <div className={styles.nameForm}>
                    <p style={{color: '#a8acb9'}}>YOUR NAME</p>
                    <input
                      id={styles.name}
                      className={styles.textInput}
                      placeholder="Damir"
                      value={this.state.name}
                      onChange={a => this.handleChandle('name', a.target.value)}
                    />
                  </div>
                  <div className={styles.emailForm}>
                    <p style={{color: '#a8acb9'}}>EMAIL</p>
                    <input
                      id={styles.email}
                      className={styles.textInput3}
                      placeholder="damir331company@gmail.com"
                      value={this.state.email}
                      onChange={b =>
                        this.handleChandle('email', b.target.value)}
                    />
                  </div>
                </div>
                <div className={styles.secondForm} />
                <p style={{color: '#a8acb9', textAlign: 'left'}}>
                  ABOUT PROJECT
                </p>
                <textarea
                  value={this.state.message}
                  className={styles.textInput2}
                  rows="7"
                  cols="50"
                  name="comment"
                  form="usrform"
                  id="comment"
                  onChange={c => this.handleChandle('message', c.target.value)}
                />
                <input
                  type="button"
                  id={styles.submit}
                  value={this.state.buttonText}
                  onClick={this.submit}
                  disabled={this.state.disabled}
                />
              </div>
            </div>
          </div>
          <div className={styles.process}>
            <div className={styles.process1}>
              <p style={{textAlign: 'center', paddingTop: '33px'}}>
                Process
              </p>
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
                <p>Analysis and planning</p>
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
                <p>Support</p>
              </div>
            </div>
          </div>
          <div className={styles.projects}>
            <div className={styles.ptitle}>
              <h2>
                Some of projects we have built
              </h2>
            </div>
            <div className={styles.projectsName}>
              <div className={styles.firstProject}>
                <img
                  className={styles.logo}
                  alt=""
                  src={'/assets/icons/Qazaq__logo.png'}
                />
                <h3 className={styles.projectName}>Qazaq App</h3>
                <p className={styles.aboutProject}>Another awesome app</p>
              </div>
              <div className={styles.secondProject}>
                <img
                  className={styles.logo}
                  alt=""
                  src={'/assets/icons/Fenix_logo.png'}
                />
                <h3 className={styles.projectName}>Fenix News</h3>
                <p className={styles.aboutProject}>Another awesome app</p>
              </div>
              <div className={styles.thirdProject}>
                <img
                  className={styles.logo}
                  alt=""
                  src={'/assets/icons/Star_logo.png'}
                />
                <h3 className={styles.projectName}>I Am Star</h3>
                <p className={styles.aboutProject}>Another awesome app</p>
              </div>
            </div>
            <div className={styles.ssylka}>
              <a className={styles.link} href="">and more</a>
            </div>
          </div>
          <div className={styles.prices}>
            <div className={styles.titlePrice}>
              <p>Pricing</p>
            </div>
            <div className={styles.pricesBlock}>
              <div className={styles.price}>
                <p className={styles.simple}>
                  SIMPLE
                </p>
                <p>Вы научитесь писать код</p>
                <p>Вы научитесь писать код</p>
                <p>Вы научитесь писать код</p>
                <p>Вы научитесь писать код</p>
                <p>Вы научитесь писать код</p>
                <p style={{color: '#51a9f2', fontSize: '33px'}}>$6,800</p>
              </div>
              <div className={styles.price}>
                <p className={styles.simple}>
                  SIMPLE
                </p>
                <p>Вы научитесь писать код</p>
                <p>Вы научитесь писать код</p>
                <p>Вы научитесь писать код</p>
                <p>Вы научитесь писать код</p>
                <p>Вы научитесь писать код</p>
                <p style={{color: '#51a9f2', fontSize: '33px'}}>$6,800</p>
              </div>
              <div className={styles.price}>
                <p className={styles.simple}>
                  SIMPLE
                </p>
                <p>Вы научитесь писать код</p>
                <p>Вы научитесь писать код</p>
                <p>Вы научитесь писать код</p>
                <p>Вы научитесь писать код</p>
                <p>Вы научитесь писать код</p>
                <p style={{color: '#51a9f2', fontSize: '33px'}}>$6,800</p>
              </div>
            </div>
            <button
              className={styles.submit2}
              type="reset"
              value="Reset"
              onClick={this.submit}
            >
              GET STARTED WITH YOUR IDEA
            </button>
          </div>
        </div>
      </Page>
    );
  }
}

export default ServicesPage;
