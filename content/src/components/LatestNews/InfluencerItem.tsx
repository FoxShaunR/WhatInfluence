import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { getInfluencerIconFromURL } from '../../common/iconHelpers';
import { TPartialInfluencer } from '../../types/influencer';

import styles from './InfluencerItem.module.css';

const InfluencerItem = ({
 primary_display,
 primary_uri,
 full_name,
 id,
}: TPartialInfluencer) => {
  const icon = React.useMemo(() => getInfluencerIconFromURL(primary_uri), [primary_uri]);
  return (
    <div className={styles.main}>
      <FontAwesomeIcon className={styles.icon} icon={icon} size="4x" />
      <Link to={`/influencer/${id}`} className={styles.nameGroup}>
        <div className={styles.name}>{primary_display}</div>
        <div className={styles.handle}>{full_name}</div>
      </Link>
    </div>
  );
};

export default InfluencerItem;
