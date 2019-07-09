import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import MediaQuery from 'react-responsive'

import styles from './Search.module.css';

const Search = () => {
  return (
    <div className={styles.main}>
      <MediaQuery minWidth={721}>
        <input className={styles.searchInput} placeholder="Find out..." type="text" />
      </MediaQuery>
      <MediaQuery maxWidth={720}>
        <input className={styles.searchInput} placeholder="Search for an influencer..." type="text" />
      </MediaQuery>
      <button className={styles.searchButton}>
        <FontAwesomeIcon icon={faSearch} size="2x" />
      </button>
    </div>
  );
};

export default Search;
