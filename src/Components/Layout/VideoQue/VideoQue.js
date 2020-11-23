import React from 'react';
import styles from './VideoQue.module.css';
import image from '../../../Assets/Images/index.jpeg';

const VideoQue = props => (

<div className={styles.VQWrapper}>
  <div className={styles.VQImage}>
    <img className={styles.image} src={image} alt="mountain biker in downhill gear"></img>
  </div>
  <div className={styles.VQMiscInfo}>
    <div className={styles.title}><span>Just another Vlog</span></div>
    <div className={styles.channelName}><span>Youtube channel</span></div>
    <div className={styles.viewsMisc}><span>1M views | 3 months ago</span></div>
  </div>
</div>

)


  export default VideoQue;