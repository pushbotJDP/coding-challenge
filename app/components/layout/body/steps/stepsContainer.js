import React from 'react';
import cx from 'classnames';
import styles from './steps.css';

const StepsContainer = () => {
  return (
    <div className={cx('column', 'is-3', styles.stepsWrapper)}>
      <h2 className="title">Steps</h2>
    </div>
  )
};

export default StepsContainer;
