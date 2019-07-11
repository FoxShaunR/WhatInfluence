import React from 'react';
import ViewContainer from '../ViewContainer/ViewContainer';

import styles from './LatestNews.module.css';

const LatestNews = () => {
  return (
    <div className={styles.main}>
      <ViewContainer title="Latest News" />
    </div>
  );
};

export default LatestNews;
