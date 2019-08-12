import queryString from 'query-string';
import React from 'react';
import { IInfluencer } from '../../types/influencer';
import ViewContainer from '../ViewContainer/ViewContainer';
import SearchResultsItem from './SearchResultsItem';

import styles from './SearchResults.module.css';

interface ISearchResults {
  searchItems: IInfluencer[];
}

const SearchResults = ({
  searchItems,
}: ISearchResults) => {
  let { keyword } = queryString.parse(window.location.search);
  keyword = Array.isArray(keyword) ? keyword[0] : keyword;
  return (
    <div className={styles.main}>
      <ViewContainer title={`Search Results - ${keyword}`}>
        {searchItems && searchItems.map((item, i) => <SearchResultsItem key={`searchItem${i}`} {...item} />)}
      </ViewContainer>
    </div>
  );
};

export default SearchResults;
