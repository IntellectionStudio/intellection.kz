import {pure} from 'recompact';
import React from 'react';

import {Image} from 'components';

import styles from './index.css';

const TeamMemberCard = ({
  teamMember: {image, firstName, lastName, position, text},
}) => (
  <div className={styles.container}>
    <div className={styles.profile}>
      <Image className={styles.image} name={image} alt="intellection faces" />
      <h2 className={styles.name}>{firstName} {lastName}</h2>
      <h3 className={styles.position}>{position}</h3>
    </div>
    <div className={styles.text}>
      {text}
    </div>
  </div>
);

export default pure(TeamMemberCard);
