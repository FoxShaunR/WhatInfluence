import React from 'react';
import Search from './Search';
import Logo from '../assets/images/Logo.png';

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.main}>
      <img src={Logo} />
      <Search />
    </div>
  );
};

export default Header;
