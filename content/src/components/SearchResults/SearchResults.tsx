import React from 'react';
import ViewContainer from '../ViewContainer/ViewContainer';

import styles from './SearchResults.module.css';

const SearchResults = () => {
  return (
    <div className={styles.main}>
      <ViewContainer title="Search Results - query" />
    </div>
  );
};

export default SearchResults;
