import React from 'react';
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
              `10, ${17 * sentiment}, 15, 100`
              : `${-17 * sentiment}, 9, 9, 100`})`,
          }}
          className={styles.title}
        >
          {title}
        </span>
        {pubdate && <span className={styles.date}>{formatDate(new Date(pubdate))}</span>}
      </div>
      <p className={styles.description}>
        {description.substr(0, 260)}
        <a rel="noopener noreferrer" target="_blank" className={styles.link} href={link}> - {name}</a>
      </p>
    </div>
  );
};

export default NewsItem;
