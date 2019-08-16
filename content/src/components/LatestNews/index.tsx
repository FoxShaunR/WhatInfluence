import React from 'react';
import {
  getLatestNews,
  getTrendingInfluencers,
} from '../../actions/actions';
import { TPartialInfluencer } from '../../types/influencer';
import { ILatestNewsItem } from '../../types/news';
import LatestNews from './LatestNews';

const LatestNewsController = () => {
  const [influencers, setInfluencers] = React.useState([] as TPartialInfluencer[]);
  const [news, setNews] = React.useState([] as ILatestNewsItem[]);

  const getData = React.useCallback(
    async () => {
        const [inf, nw] = await Promise.all([
          getTrendingInfluencers(),
          getLatestNews(),
        ]);
        setInfluencers(inf);
        setNews(nw);
      },
      [],
  );
  React.useEffect(() => {
    getData();
  }, [getData]);
  return (
    <LatestNews newsItems={news} trendingInfluencers={influencers} />
  );
};

export default LatestNewsController;
