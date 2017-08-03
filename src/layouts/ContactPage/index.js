import React from 'react';
import {pure} from 'recompact';

import {CardContainer} from 'components';
import Page from 'layouts/Page';

import Contact from './Contact';
import ContactUs from './ContactUs';
import styles from './index.css';

const ContactPage = props => (
  <Page {...Page.pickPageProps(props)}>
    <div>
      <div className={styles.cardsContainer}>
        <CardContainer>
          <Contact />
        </CardContainer>

        <CardContainer>
          <ContactUs />
        </CardContainer>
      </div>
    </div>
  </Page>
);

export default pure(ContactPage);
