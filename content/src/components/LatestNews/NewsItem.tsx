import {
  faFacebook,
  faInstagram,
  faTwitch,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { getPlatformFromURL } from '../../common/data';
import { formatDate } from '../../common/helpers';
import { ILatestNewsItem } from '../../types/news';

import styles from './NewsItem.module.css';

const NewsItem = ({
  title,
  description,
  link,
  author,
  news_source = { id: 0, name: ''},
  pubdate = '',
  influencers,
}: ILatestNewsItem) => {
  const {
    id,
    full_name,
    primary_display,
    primary_uri,
  } = React.useMemo(() => influencers[0], [influencers]);
  const icon = React.useMemo(() => {
    switch (getPlatformFromURL(primary_uri)) {
      case 'facebook':
        return faFacebook;
      case 'instagram':
          return faInstagram;
      case 'twitter':
          return faTwitter;
      case 'twitch':
          return faTwitch;
      case 'youtube':
          return faYoutube;
      default:
        return faNewspaper;
    }
  }, [primary_uri]);
  return (
    <div className={styles.main}>
      <div className={styles.headerRow}>
        <FontAwesomeIcon className={styles.icon} icon={icon} size="4x" />
        <Link to={`/influencer/${id}`} className={styles.nameGroup}>
          <div className={styles.name}>{full_name}</div>
          <div className={styles.handle}>{primary_display}</div>
        </Link>
        {<div className={styles.pubdate}>{formatDate(new Date(pubdate))}</div>}
      </div>
      <a rel="noopener noreferrer" target="_blank" href={link} className={styles.description}>
        <div className={styles.title}>{title}</div>
        {/* TODO: additional styling of name */}
        <div className={styles.description}>{`${description} - ${news_source.name}`}</div>
      </a>
    </div>
  );
};

export default NewsItem;
