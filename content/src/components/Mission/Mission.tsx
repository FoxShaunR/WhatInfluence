import React from 'react';
import ViewContainer from '../ViewContainer/ViewContainer';

import styles from './Mission.module.css';

const Mission = () => {
  return (
    <div className={styles.main}>
      <span className={styles.title}>Mission</span>
      <ViewContainer>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eros ipsum, commodo et blandit
          a, ullamcorper consectetur nisi. Aenean eget placerat ipsum. Nullam rutrum nunc eget arcu
          efficitur sagittis.
        </p>
      </ViewContainer>
    </div>
  );
};

export default Mission;
