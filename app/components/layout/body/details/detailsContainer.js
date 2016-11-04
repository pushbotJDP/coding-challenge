import React from 'react';
import cx from 'classnames';
import styles from './details.css';

const DetailsContainer = () => {
  return (
    <div className={cx('column', 'is-9', styles.detailsWrapper)}>
      <h2 className="title">Details</h2>
    </div>
  )
};

export default DetailsContainer;
