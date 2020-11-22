import React from 'react';
import styles from './Layout.module.css';

const Layout = props => {

  return(
    <div className={styles.contentWrapper}>
        <div className={styles.mainContent}>
          <div className={styles.videoContent}>
          <iframe title="test" width="962" height="541.125" src="https://www.youtube.com/embed/_Qq25EOvquk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      <div className={styles.thumbNails}>{props.children}</div>
   </div>
  )
}

export default Layout