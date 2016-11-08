import React from 'react';
import Header from './layout/header/header';
import cx from 'classnames';
import styles from './app.css';

const App = (props) => {
  return (
    <div>
      <Header/>
      <div className="columns">
        <div className={cx('column', 'is-4', styles.sidebarWrapper)}>
          {props.sidebar}
        </div>
        <div className={cx('column', 'is-8', styles.contentWrapper)}>
          {props.content}
          <hr/>
          {props.content2}
        </div>
      </div>
    </div>
  )
};

export default App;
