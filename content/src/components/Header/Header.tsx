import React from 'react';
import Search from './Search';

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.main}>
      <div>Logo</div>
      <Search />
    </div>
  );
};

export default Header;
