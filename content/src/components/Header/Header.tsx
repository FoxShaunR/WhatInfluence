import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.svg';
import Search from './Search';

import styles from './Header.module.css';

const Header = ({
  history,
}: RouteComponentProps) => {
  const [searchText, setSearchText] = React.useState('');
  const onSearch = React.useCallback(
    () => {
      history.push(`/search?keyword=${searchText}`);
    },
    [history, searchText],
  );
  return (
    <div className={styles.main}>
      <Link to="/">
        <img alt="What Influence Logo" className={styles.logo} src={Logo} />
      </Link>
      <Search onSearch={onSearch} onSearchTextChanged={setSearchText} searchText={searchText} />
    </div>
  );
};

export default withRouter(Header);
