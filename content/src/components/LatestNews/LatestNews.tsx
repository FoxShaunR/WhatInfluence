import React from 'react';
import MediaQuery from 'react-responsive';
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

const Desktop = ({
  newsItems,
  trendingInfluencers,
}: ILatestNews) => (
    <div className={styles.main}>
      <ViewContainer style={{ flex: 2 }} title="Latest News">
        {newsItems && newsItems.map((item, i) => <NewsItem key={`newsItem${i}`} {...item} />)}
      </ViewContainer>
      <ViewContainer style={{ marginLeft: 48, flex: 1 }} title="Trending Influencers">
        {trendingInfluencers && trendingInfluencers.map((item, i) => <InfluencerItem key={`newsItem${i}`} {...item} />)}
      </ViewContainer>
    </div>
  );

const Mobile = ({
  newsItems,
  trendingInfluencers,
}: ILatestNews) => {
  const [activeTab, setActiveTab] = React.useState(0);
  const onLatestClick = React.useCallback(
    () => {
      setActiveTab(0);
    },
    [setActiveTab],
  );
  const onTrendingClick = React.useCallback(
    () => {
      setActiveTab(1);
    },
    [setActiveTab],
  );
  return (
    <div className={styles.main}>
      <div className={styles.mobileMenu}>
        <button
          className={activeTab === 0 ? styles.mobileMenuBtnActive : styles.mobileMenuBtn}
          onClick={onLatestClick}
        >
          Latest News
        </button>
        <button
          className={activeTab === 1 ? styles.mobileMenuBtnActive : styles.mobileMenuBtn}
          onClick={onTrendingClick}
        >
          Trending Influencers
        </button>
      </div>
      {activeTab === 0 ? (
        <ViewContainer>
          {newsItems && newsItems.map((item, i) => <NewsItem key={`newsItem${i}`} {...item} />)}
        </ViewContainer>
      ) : (
          <ViewContainer>
            {trendingInfluencers && trendingInfluencers.map((item, i) =>
              <InfluencerItem key={`newsItem${i}`} {...item} />)}
          </ViewContainer>
        )}
    </div>
  );
};

const LatestNews = (props: ILatestNews) => {
  return (
    <>
      <MediaQuery minWidth={866}>
        <Desktop {...props} />
      </MediaQuery>
      <MediaQuery maxWidth={865}>
        <Mobile {...props} />
      </MediaQuery>
    </>

  );
};

export default LatestNews;
