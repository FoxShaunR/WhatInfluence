import { ILatestNewsItem } from '../types/news';
import { LATEST_NEWS_URL } from './urls';

export const getLatestNews = async (): Promise<ILatestNewsItem[]> =>  {
  let data = [];
  try {
    const result = await fetch(LATEST_NEWS_URL);
    ({ data } = await result.json());
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.error(error);
  }
  return data || [];
};
