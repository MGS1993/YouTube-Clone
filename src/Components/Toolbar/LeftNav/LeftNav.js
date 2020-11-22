import React from 'react';
import styles from './LeftNav.module.css';
import logo from '../../../Assets/Images/youtubeLogo.svg';
import horBar from '../../../Assets/Images/horizontalBar.svg';
const LeftNav = props => {


  return(
    <div className={styles.LeftNav}>
      <div className={styles.menu}>
        <img src={horBar} alt="horizontal bar"></img>
      </div>
      <div className={styles.homePageIcon}>
        <img src={logo} alt="YouTube logo"></img>
      </div>
    </div>
  )
}


export default LeftNav;