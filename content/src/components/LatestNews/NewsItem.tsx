import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import { formatNewsText } from '../../common/data';
import { formatDate } from '../../common/helpers';
import { getInfluencerIconFromURL } from '../../common/iconHelpers';
import {
  ILatestNewsItem,
  INewsSource,
} from '../../types/news';

import styles from './NewsItem.module.css';

interface INewsItemComponent {
 author?: string;
 full_name?: string;
 icon: IconDefinition;
 id?: number;
 link?: string;
 news_source: INewsSource;
 primary_display?: string;
 pubdate: string;
 shortened: string;
 title?: string;
}

const Desktop = ({
  author,
  full_name,
  icon,
  id,
  link,
  news_source,
  primary_display,
  pubdate,
  shortened,
  title,
}: INewsItemComponent) => {
  return (
    <>
      <div className={styles.headerRow}>
        <FontAwesomeIcon className={styles.icon} icon={icon} size="4x" />
        <Link to={`/influencer/${id}`} className={styles.nameGroup}>
          <div className={styles.handle}>{primary_display}</div>
          <div className={styles.name}>{full_name}</div>
        </Link>
        <div className={styles.pubdate}>{formatDate(new Date(pubdate!))}</div>
      </div>
      <a rel="noopener noreferrer" target="_blank" href={link} className={styles.description}>
        <div className={styles.title}>{title}</div>
        {/* TODO: additional styling of name */}
        <div className={styles.description}>{`${shortened} - ${news_source!.name}`}</div>
      </a>
    </>
  );
};

const Mobile = ({
  author,
  full_name,
  icon,
  id,
  link,
  news_source,
  primary_display,
  pubdate,
  shortened,
  title,
}: INewsItemComponent) => {
  return (
    <>
      <div className={styles.headerRow}>
        <FontAwesomeIcon className={styles.icon} icon={icon} size="3x" />
        <Link to={`/influencer/${id}`} className={styles.nameGroup}>
          <div className={styles.handle}>{primary_display}</div>
          <div className={styles.name}>{full_name}</div>
        </Link>
      </div>
      <div className={styles.pubdate}>{formatDate(new Date(pubdate!))}</div>
      <a rel="noopener noreferrer" target="_blank" href={link} className={styles.description}>
        <div className={styles.title}>{title}</div>
        {/* TODO: additional styling of name */}
        <div className={styles.description}>{`${shortened} - ${news_source!.name}`}</div>
      </a>
    </>
  );
};

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
  const icon = React.useMemo(() => getInfluencerIconFromURL(primary_uri), [primary_uri]);
  const shortened = React.useMemo(() => formatNewsText(description), [description]);
  const props = {
    author,
    description,
    full_name,
    icon,
    id,
    link,
    news_source,
    primary_display,
    pubdate,
    shortened,
    title,
  };
  return (
    <div className={styles.main}>
      <MediaQuery minWidth={866}>
        <Desktop {...props} />
      </MediaQuery>
      <MediaQuery maxWidth={865}>
        <Mobile {...props} />
      </MediaQuery>
    </div>
  );
};

export default NewsItem;
