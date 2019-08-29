import uniqueId from 'lodash/uniqueId';
import React from 'react';
import MediaQuery from 'react-responsive';
import { prepInfluencerLinks } from '../../common/data';
import { IInfluencer } from '../../types/influencer';
import { INews } from '../../types/news';
import ViewContainer from '../ViewContainer/ViewContainer';
import styles from './InfluencerDetail.module.css';
import NewsItem from './NewsItem';

interface IInfluencerDetail extends IInfluencer {
  news?: INews[];
}

const getDisplayLink = (label: string, display?: string, url?: string)  => {
  const key = uniqueId('link');
  return (
    <div className={styles.linkItem} key={key}>
      {(display || url) && `${label}: `}
      {(display && url) && (
        <a rel="noopener noreferrer" target="_blank" className={styles.linkValue} href={url}>{display}</a>
      )}
      {(display && !url) && <span className={styles.linkValue}>{display}</span>}
      {(!display && url) &&  (
        <a rel="noopener noreferrer" target="_blank" className={styles.linkValue} href={url}>{url}</a>
      )}
    </div>
  );
};

const InfluencerImage = ({
  image_uri,
  image_attribution,
}: IInfluencerDetail) => (
  <>
    {image_uri ? (
      <div className={styles.imageGroup}>
        <img alt="influencer" className={styles.image} src={image_uri} />
        <span className={styles.imageAttrib}>{image_attribution}</span>
      </div>
    ) : <div className={styles.missingImage}>Image Not Available</div>}
  </>
);

const InfluencerDetail = ({
  full_name,
  image_attribution,
  primary_display,
  primary_uri,
  image_uri,
  news = [],
  ...rest
}: IInfluencerDetail) => {
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
          <MediaQuery minWidth={866}>
            <InfluencerImage image_attribution={image_attribution} image_uri={image_uri} />
            <div className={styles.topRight}>
              <h1>{primary_display}</h1>
              <h2>{full_name}</h2>
              {links}
            </div>
          </MediaQuery>
        </div>
        <MediaQuery maxWidth={865}>
          <a rel="noopener noreferrer" target="_blank" className={styles.linkValue} href={primary_uri}>
            <h1>{primary_display}</h1>
            <h2>{full_name}</h2>
          </a>
          <InfluencerImage image_attribution={image_attribution} image_uri={image_uri} />
        </MediaQuery>
        <div className={styles.titleRow}>
          Latest News
        </div>
        <div>
          {news.map((item, i) => (
            <NewsItem key={`newsItem${i}`} {...item} />
          ))}
        </div>
      </ViewContainer>
    </div>
  );
};

export default InfluencerDetail;
