import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { getInfluencerIconFromURL } from '../../common/iconHelpers';
import { IInfluencer } from '../../types/influencer';

import styles from './SearchResultsItem.module.css';

const SearchResultsItem = ({
  id,
  full_name,
  primary_display,
  primary_uri,
}: IInfluencer) => {
  const icon = React.useMemo(() => getInfluencerIconFromURL(primary_uri), [primary_uri]);
  return (
    <Link className={styles.main} to={`/influencer/${id}`}>
      <FontAwesomeIcon icon={icon} size="3x" />
      <span className={styles.name}>{full_name}</span>
      <span className={styles.handle}>{primary_display}</span>
    </Link>
  );
};

export default SearchResultsItem;
