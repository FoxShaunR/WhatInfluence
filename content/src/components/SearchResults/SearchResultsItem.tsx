import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import styles from './SearchResultsItem.module.css';

export interface ISearchResultsItem {
  fullname: string;
  handle?: string;
}

const SearchResultsItem = ({
  fullname,
  handle,
}: ISearchResultsItem) => {
  return (
    <div className={styles.main}>
      {/* TODO: update to icon based on source */}
      <FontAwesomeIcon icon={faNewspaper} size="3x" />
      <span className={styles.name}>{fullname}</span>
      <span className={styles.handle}>{handle}</span>
    </div>
  );
};

export default SearchResultsItem;
