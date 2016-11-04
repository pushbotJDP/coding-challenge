import React from 'react';
import styles from './logo.css';
import cx from 'classnames';

const Logo = () => {
  return (
    <div className={cx('column', 'is-3', styles.logoWrapper)}>
      <img className={styles.logo} src={require('../../../../images/pushbot-peeker.png')} />
      <h2 className={cx('title', styles.logoTitle)}>PushBot</h2>
    </div>
  )
};

export default Logo;
