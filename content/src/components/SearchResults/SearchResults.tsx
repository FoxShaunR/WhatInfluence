import queryString from 'query-string';
import React from 'react';
import ViewContainer from '../ViewContainer/ViewContainer';
import SearchResultsItem, { ISearchResultsItem } from './SearchResultsItem';

import styles from './SearchResults.module.css';

interface ISearchResults {
  searchItems: ISearchResultsItem[];
}

const SearchResults = ({
  searchItems,
}: ISearchResults) => {
  let { query } = queryString.parse(window.location.search);
  query = Array.isArray(query) ? query[0] : query;
  return (
    <div className={styles.main}>
      <ViewContainer title={`Search Results - ${query}`}>
        {searchItems && searchItems.map((item, i) => <SearchResultsItem key={`searchItem${i}`} {...item} />)}
      </ViewContainer>
    </div>
  );
};

export default SearchResults;
