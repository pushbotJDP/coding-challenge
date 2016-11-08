import React from 'react';
import { Link } from 'react-router';
import cx from 'classnames';
import styles from './nav.css';

const Nav = () => {
  return (
    <div className={cx('column', 'is-8', styles.navWrapper)}>
      <div className={styles.navLeft}>
        <Link to="/processes">Processes</Link>
      </div>
      <div className={styles.navRight}>
        <Link to="/team">Team</Link>
        <a className={cx('button', styles.navSettingsButton)} href="#">
          <i className="fa fa-cog" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  )
};

export default Nav;
