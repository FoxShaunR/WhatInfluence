import React from 'react';
import ViewContainer from '../ViewContainer/ViewContainer';
import NewsItem, { INewsItem } from './NewsItem';

import styles from './LatestNews.module.css';

interface ILatestNews {
  newsItems?: INewsItem[];
}

const LatestNews = ({
  newsItems,
}: ILatestNews) => {
  return (
    <div className={styles.main}>
      <ViewContainer title="Latest News">
        {newsItems && newsItems.map((item, i) => <NewsItem key={`newsItem${i}`} {...item} />)}
      </ViewContainer>
    </div>
  );
};

export default LatestNews;
