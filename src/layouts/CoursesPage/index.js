import React from 'react';

import Page from 'layouts/Page';

import styles from './index.css';

const CoursesPage = props => (
  <Page {...props}>
    <div className={styles.container}>
      Courses
    </div>
  </Page>
);

export default CoursesPage;
