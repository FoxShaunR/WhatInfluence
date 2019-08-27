import { TPartialInfluencer } from './influencer';

export interface INews {
  title?: string;
  description?: string;
  link?: string;
  author?: string;
  pubdate?: string;
  summary?: string;
  sentiment?: number;
}

export interface INewsSource {
  id: number;
  name: string;
}

export interface INewsWithSource extends INews {
  news_source?: INewsSource;
}

export interface ILatestNewsItem extends INews {
  news_source?: INewsSource;
  influencers: TPartialInfluencer[];
}
