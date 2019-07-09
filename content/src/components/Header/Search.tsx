import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import styles from './Search.module.css';

const Search = () => {
  return (
    <div className={styles.main}>
      <input className={styles.searchInput} placeholder="Find out..." type="text" />
      <button className={styles.searchButton}>
        <FontAwesomeIcon icon={faSearch} size="2x" />
      </button>
    </div>
  );
};

export default Search;
