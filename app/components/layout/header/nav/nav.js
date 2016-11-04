import React from 'react';
import cx from 'classnames';
import styles from './nav.css';

const Nav = () => {
  return (
    <div className={cx('column', 'is-9', styles.navWrapper)}>
      <div className={styles.navLeft}>
        <a href="#">
          Tasks
        </a>
        <a href="#">
          Routines
        </a>
        <a href="#">
          Templates
        </a>
      </div>
      <div className={styles.navRight}>
        <a href="#">
          Team
        </a>
        <a className={cx('button', styles.navSettingsButton)} href="#">
          <i className="fa fa-cog" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  )
};

export default Nav;
