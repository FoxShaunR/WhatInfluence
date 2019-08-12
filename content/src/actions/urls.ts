const { REACT_APP_API_SERVER_URL } = process.env;
const BASE_URL = `${REACT_APP_API_SERVER_URL}/content`;

export const API_LATEST_NEWS_URL = `${BASE_URL}/latest-news`;
export const API_INFLUENCER_URL = `${BASE_URL}/influencer`;
export const API_INFLUENCER_FIND_BY_KEYWORD_URL = `${BASE_URL}/findInfluencersByKeyword`;
