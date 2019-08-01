import React from 'react';
import { getLatestNews } from '../../actions/actions';
import { ILatestNewsItem } from '../../types/news';
import LatestNews from './LatestNews';

const LatestNewsController = () => {
  const [news, setNews] = React.useState([] as ILatestNewsItem[]);

  const getNews = async () => {
    const results = await getLatestNews();
    setNews(results);
  };
  React.useEffect(() => {
    getNews();
  }, []);
  return (
    <LatestNews newsItems={news} />
  );
};

export default LatestNewsController;
