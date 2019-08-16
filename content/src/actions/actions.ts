import { IInfluencer, TPartialInfluencer } from '../types/influencer';
import { ILatestNewsItem } from '../types/news';
import {
  API_INFLUENCER_FIND_BY_KEYWORD_URL,
  API_INFLUENCER_URL,
  API_LATEST_NEWS_URL,
  API_TRENDING_INFLUENCERS_URL,
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

export const getTrendingInfluencers = async (): Promise<TPartialInfluencer[]> =>  {
  let data = [];
  try {
    const result = await fetch(API_TRENDING_INFLUENCERS_URL);
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

export const getInfluencerNewsById = async (id: string): Promise<ILatestNewsItem[]> =>  {
  let data = [];
  try {
    const result = await fetch(`${API_INFLUENCER_URL}/${id}/news`);
    ({ data } = await result.json());
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.error(error);
  }
  return data || [];
};

export const findInfluencersByKeyword = async (keyword?: string | string[] | null): Promise<IInfluencer[]> =>  {
  let data = [];
  try {
    const result = await fetch(`${API_INFLUENCER_FIND_BY_KEYWORD_URL}/?keyword=${keyword}`);
    ({ data } = await result.json());
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.error(error);
  }
  return data || [];
};
