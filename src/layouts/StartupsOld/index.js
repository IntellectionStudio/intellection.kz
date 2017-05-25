/* @flow */
import React, {Component} from 'react';
import {Link} from 'phenomic';
import Measure from 'react-measure';
import {mapObjIndexed, values} from 'ramda';

import Page from 'layouts/Page';

import styles from './index.css';

const SHOW_BUTTON_WIDTH = 570;

type PropsType = {
  head: Object,
};
const mapVal = (fn, obj) => values(mapObjIndexed(fn, obj));
class Startups extends Component {
  props: PropsType;
  state = {
    logo: '',
    image: '',
    title: '',
    text: '',
    link: '',
    default: true,
    width: -1,
  };
  componentWillMount() {
    this.setState({
      text: this.props.head.default.text,
      title: this.props.head.default.title,
      image: this.props.head.default.image,
      default: true,
    });
  }

  renderStartupLogo = (startup: Object, key: string) => (
    <div>
      <button
        key={key}
        className={styles.logoButton}
        onClick={() =>
          this.setState({
            text: startup.text,
            title: startup.title,
            image: startup.image,
            link: startup.link,
            default: false,
          })}
      >
        <img className={styles.logo} src={startup.logo} alt={`${key} Logo`} />
      </button>
    </div>
  );
  renderContent() {
    if (this.state.default) {
      return (
        <div
          className={styles.backgroundStartup}
          style={{
            background: `url(${this.state.image}) center center no-repeat`,
          }}
        >
          <div className={styles.defaultStartupTitle}>
            {this.state.title}
          </div>
          <div className={styles.defaultStartupText}>
            {this.state.text}
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className={styles.startupTitle}>
          {this.state.title}
        </div>
        <div className={styles.startupText}>
          {this.state.text}
        </div>
        <div className={styles.learnMore}>
          <Link to={this.state.link}>
            Подробнее
          </Link>
        </div>
        <div
          className={styles.backgroundStartup}
          style={{
            background: `url(${this.state.image}) center center no-repeat`,
          }}
        />
      </div>
    );
  }
  /*
  this.setState({
    width: this.state.width,
  })}
  <Measure
    onMeasure={(width) =>
      this.setState({
        width: width,
      })
    }
  >
  </Measure>
            <Measure>{({width}) => <div>My width is {width}</div>}</Measure>
              console.log(width);
  */
  renderButton() {
    if (this.state.width < SHOW_BUTTON_WIDTH) {
      return <button type="button">Yes</button>;
    }
    return <button type="button">Not</button>;
  }
  render() {
    return (
      <Page {...this.props}>
        <Measure
          onMeasure={({width}) => {
            this.setState({
              width,
            });
          }}
        >
          <div className={styles.container}>
            <div className={styles.logos}>
              {mapVal(this.renderStartupLogo, this.props.head.startups)}
              {this.renderButton()};
            </div>
            {this.renderContent()}
          </div>
        </Measure>
      </Page>
    );
  }
}

export default Startups;
