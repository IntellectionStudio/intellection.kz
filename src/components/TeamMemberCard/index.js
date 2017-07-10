import {pure} from 'recompact';
import React from 'react';

import FaceImage from './FaceImage';
import styles from './index.css';

const TeamMemberCard = ({
  teamMember: {faceImageCollection, image, firstName, lastName, position, text},
}) =>
  <div className={styles.container}>
    <div className={styles.profile}>
      <FaceImage
        className={styles.image}
        faceImageCollection={faceImageCollection}
        defaultImage={image}
      />
      <h2 className={styles.name}>
        {firstName} {lastName}
      </h2>
      <h3 className={styles.position}>
        {position}
      </h3>
    </div>
    <div className={styles.text}>
      {text}
    </div>
  </div>;

export default pure(TeamMemberCard);
