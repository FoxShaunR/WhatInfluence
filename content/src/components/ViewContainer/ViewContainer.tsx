import React from 'react';

import styles from './ViewContainer.module.css';

interface IViewContainer {
  title?: string;
  children?: JSX.Element | JSX.Element[];
  style?: React.CSSProperties;
}

const ViewContainer = ({
  title,
  children,
  style,
}: IViewContainer) => {
  return (
    <div className={styles.main} style={style}>
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
