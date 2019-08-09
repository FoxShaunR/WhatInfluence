import { IInfluencer } from '../types/influencer';
import { ILatestNewsItem } from '../types/news';
import {
  API_INFLUENCER_URL,
  API_LATEST_NEWS_URL,
} from './urls';

export const getLatestNews = async (): Promise<ILatestNewsItem[]> =>  {
  let data = [];
  try {
    const result = await fetch(API_LATEST_NEWS_URL);
    ({ data } = await result.json());
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.error(error);
  }
  return data || [];
};

export const getInfluencer = async (id: string): Promise<IInfluencer> =>  {
  let data = {};
  try {
    const result = await fetch(`${API_INFLUENCER_URL}/${id}`);
    data = await result.json();
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.error(error);
  }
  return data || {};
};
