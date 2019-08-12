import queryString from 'query-string';
import React from 'react';
import { findInfluencersByKeyword } from '../../actions/actions';
import { IInfluencer } from '../../types/influencer';
import SearchResults from './SearchResults';

const SearchResultsController = () => {
  let { keyword } = queryString.parse(window.location.search);
  keyword = Array.isArray(keyword) ? keyword[0] : keyword;
  const [influencers, setInfluencers] = React.useState([] as IInfluencer[]);

  const getResults = async () => {
    const results = await findInfluencersByKeyword(keyword);
    setInfluencers(results);
  };
  React.useEffect(() => {
    getResults();
  }, [keyword]);
  return (
    <SearchResults searchItems={influencers} />
  );
};

export default SearchResultsController;
