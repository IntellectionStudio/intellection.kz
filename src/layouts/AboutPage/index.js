import React, {Component} from 'react';
import {pure} from 'recompact';
import ModalVideo from 'react-modal-video';

import mapValues from 'utils/mapValues';
import Page from 'layouts/Page';
import {TeamMemberCard, TopManagerCard, Image, SVGImage} from 'components';

import styles from './index.css';

const renderTopManagerCard = topManager => (
  <TopManagerCard
    key={`${topManager.firstName}-${topManager.lastName}`}
    teamMember={topManager}
  />
);
const renderTeamMemberCard = teamMember => (
  <TeamMemberCard
    key={`${teamMember.firstName}-${teamMember.lastName}`}
    teamMember={teamMember}
  />
);

class AboutPage extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({isOpen: true});
  }

  render() {
    return (
      <Page {...Page.pickPageProps(this.props)}>
        <div className={styles.hero}>
          <div className={styles.heroWrapper}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                {this.props.head.hero.title}
              </h1>
              <p className={styles.heroText}>
                {this.props.head.hero.text}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.video}>
          <div className={styles.videoWrapper}>
            <div className={styles.videoContainer}>
              <div className={styles.videoContent}>
                <h1 className={styles.videoTitle}>
                  {this.props.head.video.title}
                </h1>
                <div className={styles.videoText}>
                  {mapValues(
                    (text, key) =>
                      typeof text.detail === 'string'
                        ? <p key={key} className={styles.p}>
                            <b>{text.title}</b> - {text.detail}
                          </p>
                        : <div key={key}>
                            <b>{text.title}</b>:
                            {text.detail.map((listItem, index) => (
                              <p key={listItem}>{index + 1}) {listItem}</p>
                            ))}
                          </div>,
                    this.props.head.video.texts,
                  )}
                </div>
                <ModalVideo
                  channel="youtube"
                  isOpen={this.state.isOpen}
                  videoId="FC0pT9xg1oI"
                />
                <button className={styles.videoButton} onClick={this.openModal}>
                  {this.props.head.video.buttonText}
                  <SVGImage
                    className={styles.playIcon}
                    name="logo-mainpage-playbutton.svg"
                    alt="Intellection Video Placeholder"
                  />
                </button>
              </div>
              <div className={styles.videoDiv}>
                <div className={styles.videoFrame}>
                  <Image
                    className={styles.videoFrameImage}
                    name="videoPlaceholder.jpg"
                    background
                    alt="Intellection Video Placeholder"
                  />
                  <div className={styles.bigPlayIconWrapper}>
                    <button
                      onClick={this.openModal}
                      className={styles.bigPlayButton}
                    />
                    <SVGImage
                      className={styles.bigPlayIcon}
                      name="logo-mainpage-playbutton.svg"
                      alt="Intellection Video Placeholder"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.team}>
          <div className={styles.teamWrapper}>
            <div className={styles.teamContent}>
              <h1 className={styles.teamTitle}>
                {this.props.head.team.title}
              </h1>
              <p className={styles.teamText}>
                {this.props.head.team.text}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.management}>
          <div className={styles.managementWrapper}>
            {mapValues(renderTopManagerCard)(this.props.head.team.topManagers)}
          </div>
        </div>
        <div className={styles.teamMembers}>
          <div className={styles.teamMembersWrapper}>
            {mapValues(renderTeamMemberCard)(this.props.head.team.teamMembers)}
          </div>
        </div>
      </Page>
    );
  }
}

export default pure(AboutPage);
