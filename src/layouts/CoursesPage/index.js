import React, {Component} from 'react';
import ModalVideo from 'react-modal-video';

import Page from 'layouts/Page';

import styles from './index.css';

class CoursesPage extends Component {
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
    const {
      heading,
      youtubeVideoId,
      about,
      benefits,
      salary,
      courses,
    } = this.props.head;
    return (
      <Page {...this.props}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <p className={styles.headingText}>
              {heading.text}
            </p>
            <h1 className={styles.headingTitle}>
              {heading.title}
            </h1>
          </div>
          <div className={styles.videoSection}>
            <div className={styles.video}>
              <div className={styles.videoImage} />
              <div className={styles.playIconWrapper}>
                <ModalVideo
                  channel="youtube"
                  isOpen={this.state.isOpen}
                  videoId={youtubeVideoId}
                />
                <button onClick={this.openModal} className={styles.videoButton}>
                  <img
                    alt="Play Video"
                    className={styles.playIcon}
                    src="/assets/play-white.svg"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className={styles.main}>
            <div className={styles.about}>
              <h2 className={styles.aboutTitle}>
                {about.title}
              </h2>
              {about.text.map(text => (
                <p key={text} className={styles.aboutText}>{text}</p>
              ))}
              <ul className={styles.benefits}>
                {benefits.map(benefit => (
                  <li key={benefit} className={styles.benefit}>{benefit}</li>
                ))}
              </ul>
            </div>
            <div className={styles.mainRight}>
              <div className={styles.statsContainer}>
                <div className={styles.divStatsIcon}>
                  <img
                    className={styles.statsIcon}
                    src="/assets/stats-icon.png"
                    alt="Stats Icon"
                  />
                </div>
                <div className={styles.divInfo}>
                  <div className={styles.divSalary}>
                    <h2 className={styles.salaryAmount}>
                      {salary.amount}
                    </h2>
                    <p className={styles.salaryText}>{salary.text}</p>
                  </div>
                  <img
                    className={styles.statsPlaceholder}
                    src="/assets/stats-placeholder.png"
                    alt="Paysa Stats"
                  />
                </div>
              </div>
              {courses.map(course => (
                <div key={course.title} className={styles.course}>
                  <h2 className={styles.courseTitle}>
                    {course.title}
                  </h2>
                  <div className={styles.attributes}>
                    {course.attributes.map(attr => (
                      <div
                        key={attr.header ? attr.header : attr.src}
                        className={styles.attribute}
                      >
                        <div className={styles.attributeHeader}>
                          {!attr.image
                            ? attr.header
                            : <img
                                className={styles.attributeHeaderImage}
                                src={attr.src}
                                alt={attr.alt}
                              />}
                        </div>
                        <p className={styles.attributeText}>
                          {attr.text}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className={styles.courseSummary}>
                    <div className={styles.price}>
                      <h3 className={styles.priceTitle}>
                        {course.price.title}
                      </h3>
                      <p className={styles.priceText}>
                        {course.price.text}
                      </p>
                    </div>
                    <div className={styles.ctaContainer}>
                      <button
                        className={
                          course.button.color === 'blue'
                            ? styles.cta
                            : styles.cta2
                        }
                      >
                        {course.button.text}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

export default CoursesPage;
