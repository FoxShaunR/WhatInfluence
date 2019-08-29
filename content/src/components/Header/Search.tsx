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
  onSearch = () => undefined,
}: ISearch) => {
  const onKeyPress = React.useCallback(
    (event: any) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        onSearch();
      }
    },
    [onSearch],
  );
  return (
    <div className={styles.main}>
      <MediaQuery minWidth={866}>
        <input
          className={styles.searchInput}
          placeholder="Find out..."
          type="text"
          value={searchText}
          onKeyPress={onKeyPress}
          // tslint:disable-next-line: jsx-no-lambda
          onChange={(val) => onSearchTextChanged && onSearchTextChanged(val.currentTarget.value)}
        />
      </MediaQuery>
      <MediaQuery maxWidth={865}>
        <input
          className={styles.searchInput}
          placeholder="Search for an influencer..."
          type="text"
          value={searchText}
          onKeyPress={onKeyPress}
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
