import React from 'react';
import { Link } from 'react-router';
import styles from './logo.css';
import cx from 'classnames';

const Logo = () => {
  return (
    <div className={cx('column', 'is-4', styles.logoWrapper)}>
      <Link to="/">
        <img className={styles.logo} src={require('../../../../images/pushbot-peeker.png')} />
        <h2 className={cx('title', styles.logoTitle)}>PushBot</h2>
      </Link>
    </div>
  )
};

export default Logo;
