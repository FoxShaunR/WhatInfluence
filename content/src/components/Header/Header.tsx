import React from 'react';
import Logo from '../assets/images/Logo.svg';
import Search from './Search';

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.main}>
      <img alt="What Influence Logo" className={styles.logo} src={Logo} />
      <Search />
    </div>
  );
};

export default Header;
