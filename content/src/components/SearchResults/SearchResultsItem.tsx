import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { IInfluencer } from '../../types/influencer';

import styles from './SearchResultsItem.module.css';

const SearchResultsItem = ({
  id,
  full_name,
  primary_display,
}: IInfluencer) => {
  return (
    <Link className={styles.main} to={`/influencer/${id}`}>
      {/* TODO: update to icon based on source */}
      <FontAwesomeIcon icon={faNewspaper} size="3x" />
      <span className={styles.name}>{full_name}</span>
      <span className={styles.handle}>{primary_display}</span>
    </Link>
  );
};

export default SearchResultsItem;
