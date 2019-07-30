import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import MediaQuery from 'react-responsive';

import styles from './Search.module.css';

interface ISearch {
  onSearch?: () => void;
  onSearchTextChanged?: React.Dispatch<React.SetStateAction<string>>;
  searchText?: string;
}

const Search = ({
  onSearchTextChanged,
  searchText = '',
  onSearch,
}: ISearch) => {
  return (
    <div className={styles.main}>
      <MediaQuery minWidth={721}>
        <input
          className={styles.searchInput}
          placeholder="Find out..."
          type="text"
          value={searchText}
          // tslint:disable-next-line: jsx-no-lambda
          onChange={(val) => onSearchTextChanged && onSearchTextChanged(val.currentTarget.value)}
        />
      </MediaQuery>
      <MediaQuery maxWidth={720}>
        <input
          className={styles.searchInput}
          placeholder="Search for an influencer..."
          type="text"
          value={searchText}
          // tslint:disable-next-line: jsx-no-lambda
          onChange={(val) => onSearchTextChanged && onSearchTextChanged(val.currentTarget.value)}
        />
      </MediaQuery>
      <button onClick={onSearch} className={styles.searchButton}>
        <FontAwesomeIcon icon={faSearch} size="2x" />
      </button>
    </div>
  );
};

export default Search;
