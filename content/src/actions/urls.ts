const { REACT_APP_API_SERVER_URL } = process.env;
const BASE_URL = `${REACT_APP_API_SERVER_URL}/content`;

export const LATEST_NEWS_URL = `${BASE_URL}/latest-news`;
