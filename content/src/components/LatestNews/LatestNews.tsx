import React from 'react';
import { TPartialInfluencer } from '../../types/influencer';
import { ILatestNewsItem } from '../../types/news';
import ViewContainer from '../ViewContainer/ViewContainer';
import InfluencerItem from './InfluencerItem';
import NewsItem from './NewsItem';

import styles from './LatestNews.module.css';

interface ILatestNews {
  newsItems?: ILatestNewsItem[];
  trendingInfluencers?: TPartialInfluencer[];
}

const LatestNews = ({
  newsItems,
  trendingInfluencers,
}: ILatestNews) => {
  return (
    <div className={styles.main}>
      <ViewContainer style={{ flex: 2 }} title="Latest News">
        {newsItems && newsItems.map((item, i) => <NewsItem key={`newsItem${i}`} {...item} />)}
      </ViewContainer>
      <ViewContainer style={{ marginLeft: 48, flex: 1 }} title="Trending Influencers">
        {trendingInfluencers && trendingInfluencers.map((item, i) => <InfluencerItem key={`newsItem${i}`} {...item} />)}
      </ViewContainer>
    </div>
  );
};

export default LatestNews;
