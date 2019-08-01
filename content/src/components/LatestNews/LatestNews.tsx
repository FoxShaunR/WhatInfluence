import React from 'react';
import { ILatestNewsItem } from '../../types/news';
import ViewContainer from '../ViewContainer/ViewContainer';
import NewsItem from './NewsItem';

import styles from './LatestNews.module.css';

interface ILatestNews {
  newsItems?: ILatestNewsItem[];
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
