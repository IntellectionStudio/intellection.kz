/* @flow */

import {Link} from 'phenomic';
import {pure} from 'recompact';
import React from 'react';

import styles from './index.css';

type FooterOwnPropsType = {||};

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.studio}>
        <h3 className={styles.title}>О студии</h3>
        <p className={styles.text}>
          Небольшой текст о студии Intellection
        </p>
      </div>
      <div className={styles.contacts}>
        <h3 className={styles.title}>Контакты</h3>
        <p className={styles.text}>
          ул. Сатпаева 30а/3, этаж 3, Алматы, Казахстана
        </p>
      </div>
      <div className={styles.socialBlock}>
        <h3 className={styles.title}>Мы в сети</h3>
        <div className={styles.social}>
          <Link className={styles.socialButton} to="facebook">
            <img
              className={styles.buttonIcon}
              src="/assets/facebook.png"
              alt="Facebook"
            />
          </Link>
          <Link className={styles.socialButton} to="instagram">
            <img
              className={styles.buttonIcon}
              src="/assets/instagram.png"
              alt="Instagram"
            />
          </Link>
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
        <Link to="/" className={styles.logoLink}>
          <img className={styles.logo} src="/assets/logo.png" alt="Logo" />
        </Link>
      </div>
    </div>
  </footer>
);

const EnhancedFooter: EnhancedComponentType<FooterOwnPropsType> = pure(Footer);

export default EnhancedFooter;
