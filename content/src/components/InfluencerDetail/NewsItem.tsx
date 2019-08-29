import React from 'react';
import MediaQuery from 'react-responsive';
import { formatNewsText } from '../../common/data';
import { formatDate } from '../../common/helpers';
import { INewsWithSource } from '../../types/news';

import styles from './NewsItem.module.css';

const NewsItem = ({
  title,
  pubdate,
  description = '',
  link,
  sentiment = 0,
  news_source = { id: 0, name: ''},
}: INewsWithSource) => {
  const { name } = news_source;
  return (
    <div className={styles.main}>
      <div className={styles.row}>
        <span
          style={{
            color: `RGBA(${
              sentiment > 0 ?
              `10, ${17 * Math.min(sentiment, 10)}, 15, 100`
              : `${-17 * Math.max(sentiment, -10)}, 9, 9, 100`})`,
          }}
          className={styles.title}
        >
          {title}
        </span>
        <MediaQuery minWidth={866}>
          {pubdate && <span className={styles.date}>{formatDate(new Date(pubdate))}</span>}
        </MediaQuery>
      </div>
      <MediaQuery maxWidth={865}>
        {pubdate && <div className={styles.date}>{formatDate(new Date(pubdate))}</div>}
      </MediaQuery>
      <p className={styles.description}>
        {formatNewsText(description)}
        <a rel="noopener noreferrer" target="_blank" className={styles.link} href={link}> - {name}</a>
      </p>
    </div>
  );
};

export default NewsItem;
