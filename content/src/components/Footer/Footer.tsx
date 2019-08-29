import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.main}>
      <Link className={styles.mission} to="/">Home</Link>
      <Link className={styles.mission} to="/mission">Mission</Link>
      <Link className={styles.contact} to="/contact">Contact</Link>
    </div>
  );
};

export default Footer;
