import uniqueId from 'lodash/uniqueId';
import React from 'react';
import { prepInfluencerLinks } from '../common/data';
import { IInfluencer } from '../types/influencer';
import ViewContainer from '../ViewContainer/ViewContainer';
import styles from './InfluencerDetail.module.css';

const getDisplayLink = (label: string, display?: string, url?: string)  => {
  const key = uniqueId('link');
  return (
    <div className={styles.linkItem} key={key}>
      {(display || url) && `${label}: `}
      {(display && url) && <a className={styles.linkValue} href={url}>{display}</a>}
      {(display && !url) && <span className={styles.linkValue}>{display}</span>}
      {(!display && url) &&  <a className={styles.linkValue} href={url}>{url}</a>}
    </div>
  );
};

const InfluencerDetail = ({
  full_name,
  image_attribution,
  primary_display,
  primary_uri,
  image_uri,
  ...rest
}: IInfluencer) => {
  const links = React.useMemo(() => {
      const allLinks = prepInfluencerLinks(rest);
      const newLinks = allLinks.map((l) => getDisplayLink(l.label, l.display, l.uri));
      return newLinks;
  }
  , [rest]);
  return (
    <div className={styles.main}>
      <ViewContainer>
        <div className={styles.topRow}>
          {image_uri ? (
            <div className={styles.imageGroup}>
              <img alt="influencer" className={styles.image} src={image_uri} />
              <span className={styles.imageAttrib}>{image_attribution}</span>
            </div>
          ) : <div className={styles.missingImage}>Image Not Available</div>}
          <div className={styles.topRight}>
            <h1>{primary_display}</h1>
            <h2>{full_name}</h2>
            {links}
          </div>
        </div>
      </ViewContainer>
    </div>
  );
};

export default InfluencerDetail;
