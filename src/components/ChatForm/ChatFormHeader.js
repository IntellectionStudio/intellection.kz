import React from 'react';

import {SVGImage} from 'components';

import styles from './ChatFormHeader.css';

const ChatFormHeader = ({handleClose}) => (
  <div className={styles.container}>
    <button onClick={handleClose} className={styles.button}>
      <SVGImage
        name={'closeButton.svg'}
        className={styles.closeButton}
        alt={'closeButton'}
      />
    </button>
  </div>
);

export default ChatFormHeader;
