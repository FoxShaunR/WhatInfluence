import React from 'react';

import styles from './ViewContainer.module.css';

interface IViewContainer {
  title?: string;
  children?: JSX.Element | JSX.Element[];
}

const ViewContainer = ({
  title,
  children,
}: IViewContainer) => {
  return (
    <div className={styles.main}>
      {title && (
        <div className={styles.titleRow}>
          {title}
        </div>
      )}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default ViewContainer;
