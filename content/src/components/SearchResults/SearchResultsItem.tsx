import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import { getInfluencerIconFromURL } from '../../common/iconHelpers';
import { IInfluencer } from '../../types/influencer';

import styles from './SearchResultsItem.module.css';

interface IInfluencerComp extends IInfluencer {
  icon: IconDefinition;
}

const Desktop = ({
  full_name,
  primary_display,
  icon,
}: IInfluencerComp) => {
  return (
    <>
      <FontAwesomeIcon className={styles.icon} icon={icon} size="4x" />
      <span className={styles.name}>{full_name}</span>
      <span className={styles.handle}>{primary_display}</span>
    </>
  );
};

const Mobile = ({
  full_name,
  primary_display,
  icon,
}: IInfluencerComp) => {
  return (
    <>
      <FontAwesomeIcon className={styles.icon} icon={icon} size="3x" />
      <div>
        <div className={styles.name}>{full_name}</div>
        <div className={styles.handle}>{primary_display}</div>
      </div>
    </>
  );
};

const SearchResultsItem = (props: IInfluencer) => {
  const icon = React.useMemo(() =>
    getInfluencerIconFromURL(props.primary_uri), [props.primary_uri]);
  return (
    <Link className={styles.main} to={`/influencer/${props.id}`}>
      <MediaQuery minWidth={866}>
        <Desktop {...props} icon={icon} />
      </MediaQuery>
      <MediaQuery maxWidth={865}>
        <Mobile {...props} icon={icon} />
      </MediaQuery>
    </Link>
  );
};

export default SearchResultsItem;
