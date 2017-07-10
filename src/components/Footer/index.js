import {Link} from 'phenomic';
import {pure} from 'recompact';
import cx from 'classnames';
import React from 'react';

import styles from './index.css';

const Footer = ({homepage}) => (
  <footer
    className={cx(styles.footer, {
      [styles.whiteBackground]: homepage,
    })}
  >
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.studio}>
          <h3 className={styles.title}>О студии</h3>
          <p className={styles.text}>
            Мы любим программирование и новые технологии и даже верим, что живем
            в VR.
          </p>
        </div>
        <div className={styles.contacts}>
          <h3 className={styles.title}>Контакты</h3>
          <p className={styles.text}>
            ул. Сатпаева 30а/3, этаж 3, Алматы, Казахстан
          </p>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.socialBlock}>
          <h3 className={styles.title}>Мы в сети</h3>
          <div className={styles.social}>
            <div className={styles.socialButton}>
              <Link
                className={cx(styles.buttonIcon, {
                  [styles.buttonIcon2]: homepage,
                })}
                to="https://www.facebook.com/intellection.kz"
              />
            </div>
            <div className={styles.socialButton}>
              <Link
                className={cx(styles.buttonIcon3, {
                  [styles.buttonIcon4]: homepage,
                })}
                to="https://www.instagram.com/intellection.kz/"
              />
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <div className={styles.copyrightText}>
            <div>
              © 2017 Intellection.kz
            </div>
            <div>
              All Right Reserved
            </div>
          </div>
          <Link
            to="/"
            className={cx(styles.logoLink, {
              [styles.logoGreyLink]: homepage,
            })}
          />
        </div>
      </div>

    </div>
  </footer>
);

export default pure(Footer);
