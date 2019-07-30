import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { formatDate } from '../../common/helpers';

import styles from './NewsItem.module.css';

export interface INewsItem {
  fullname: string;
  handle?: string;
  title: string;
  description?: string;
  link: string;
  author?: string;
  source_name?: string;
  pubdate?: Date;
}

const NewsItem = ({
  fullname,
  handle,
  title,
  description,
  link,
  author,
  source_name,
  pubdate,
}: INewsItem) => {
  return (
    <div className={styles.main}>
      <div className={styles.headerRow}>
        {/* TODO: update to icon based on source */}
        <FontAwesomeIcon className={styles.icon} icon={faNewspaper} size="4x" />
        <div className={styles.nameGroup}>
          <div className={styles.name}>{fullname}</div>
          <div className={styles.handle}>{handle}</div>
        </div>
        {<div className={styles.pubdate}>{formatDate(pubdate)}</div>}
      </div>
      <div className={styles.title}>{title}</div>
      {/* TODO: additional styling of name */}
      <div className={styles.description}>{`${description} - ${source_name}`}</div>
    </div>
  );
};

export default NewsItem;
