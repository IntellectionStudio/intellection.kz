import React from 'react';

import Page from 'layouts/Page';

import styles from './index.css';

const CoursesPage = props => (
  <Page {...props}>
    <div className={styles.container}>
      <div className={styles.heading}>
        <p className={styles.headingText}>
          Курсы №1 в Казахстане
        </p>
        <h1 className={styles.headingTitle}>
          Курс разработки мобильных приложений
        </h1>
      </div>
      <div className={styles.videoSection}>
        <div className={styles.video}>
          <div className={styles.videoImage} />
          <div className={styles.playIconWrapper}>
            <img
              alt="Play Video"
              className={styles.playIcon}
              src="/assets/play-white.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.about}>
          <h2 className={styles.aboutTitle}>
            Что вам даст этот курс?
          </h2>
          <p className={styles.aboutText}>
            I have hinted that I would often jerk poor Queequeg from between the whale and the ship—where he would occasionally fall, from the incessant.
          </p>
          <p className={styles.aboutText}>
            I have hinted that I would often jerk poor Queequeg from between the whale and the ship—where he would occasionally fall, from the incessant.
          </p>
          <ul className={styles.benefits}>
            <li className={styles.benefit}>Вы научитесь писать код</li>
            <li className={styles.benefit}>Вы научитесь писать код</li>
            <li className={styles.benefit}>Вы научитесь писать код</li>
            <li className={styles.benefit}>Вы научитесь писать код</li>
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
                  $125k
                </h2>
                <p className={styles.salaryText}>СРЕДНЯЯ ЗАРПЛАТА</p>
              </div>
              <img
                className={styles.statsPlaceholder}
                src="/assets/stats-placeholder.png"
                alt="Paysa Stats"
              />
            </div>
          </div>
          <div className={styles.individual}>
            <h2 className={styles.individualTitle}>
              Индивидуальный Курс
            </h2>
            <div className={styles.attributes}>
              <div className={styles.attribute}>
                <div className={styles.attributeHeader}>∞</div>
                <p className={styles.attributeText}>Довольных студентов</p>
              </div>
              <div className={styles.attribute}>
                <div className={styles.attributeHeader}>17</div>
                <p className={styles.attributeText}>Сломанных телефонов</p>
              </div>
              <div className={styles.attribute}>
                <div className={styles.attributeHeader}>
                  <img
                    className={styles.attributeHeaderImage}
                    src="/assets/apple-icon.png"
                    alt="Apple Icon"
                  />
                </div>
                <p className={styles.attributeText}>Сломанных телефонов</p>
              </div>
              <div className={styles.attribute}>
                <div className={styles.attributeHeader}>0</div>
                <p className={styles.attributeText}>Негативных отзывов</p>
              </div>
            </div>
            <div className={styles.individualSummary}>
              <div className={styles.price}>
                <h3 className={styles.priceTitle}>60 тыс.</h3>
                <p className={styles.priceText}>тенге за курс</p>
              </div>
              <div className={styles.ctaContainer}>
                <button className={styles.cta}>
                  Оставить заявку
                </button>
              </div>
            </div>
          </div>

          <div className={styles.individual}>
            <h2 className={styles.individualTitle}>
              КОРПОРАТИВНЫЙ КУРС
            </h2>
            <div className={styles.attributes}>
              <div className={styles.attribute}>
                <div className={styles.attributeHeader}>∞</div>
                <p className={styles.attributeText}>Довольных студентов</p>
              </div>
              <div className={styles.attribute}>
                <div className={styles.attributeHeader}>17</div>
                <p className={styles.attributeText}>Сломанных телефонов</p>
              </div>
              <div className={styles.attribute}>
                <div className={styles.attributeHeader}>
                  <img
                    className={styles.attributeHeaderImage}
                    src="/assets/apple-icon.png"
                    alt="Apple Icon"
                  />
                </div>
                <p className={styles.attributeText}>Сломанных телефонов</p>
              </div>
              <div className={styles.attribute}>
                <div className={styles.attributeHeader}>0</div>
                <p className={styles.attributeText}>Негативных отзывов</p>
              </div>
            </div>
            <div className={styles.individualSummary}>
              <div className={styles.price}>
                <h3 className={styles.priceTitle}>160 тыс.</h3>
                <p className={styles.priceText}>тенге за курс</p>
              </div>
              <div className={styles.ctaContainer}>
                <button className={styles.cta2}>
                  Оставить заявку
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </Page>
);

export default CoursesPage;
