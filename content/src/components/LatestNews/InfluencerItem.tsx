import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import MediaQuery from 'react-responsive';
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
      <MediaQuery minWidth={807}>
        <FontAwesomeIcon className={styles.icon} icon={icon} size="4x" />
      </MediaQuery>
      <MediaQuery maxWidth={806}>
        <FontAwesomeIcon className={styles.icon} icon={icon} size="3x" />
      </MediaQuery>
      <Link to={`/influencer/${id}`} className={styles.nameGroup}>
        <div className={styles.name}>{primary_display}</div>
        <div className={styles.handle}>{full_name}</div>
      </Link>
    </div>
  );
};

export default InfluencerItem;
