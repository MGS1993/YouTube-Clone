import React from 'react';
import styles from './RightNav.module.css';
import bell from '../../../Assets/Images/bell.svg';
import camera from '../../../Assets/Images/video-camera.svg';
import grid from '../../../Assets/Images/grid.svg';
const RightNav = props => {


  return(
    <div className={styles.RightNav}>
      <div className={styles.create}>
        <img src={camera} alt="video Camera Icon"></img>
      </div>
      <div className={styles.youTubeApps}>
      <img src={grid} alt="four dots forming a grid"></img>
      </div>
      <div className={styles.notifications}>
        <img src={bell} alt="ringing bell"></img>
      </div>
      <div className={styles.profileIcon}>
        <div>M</div>
      </div>
    </div>
  )
}

export default RightNav;