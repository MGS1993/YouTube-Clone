import React from 'react';
import styles from './Layout.module.css';
import bobo from '../../Assets/Images/bobo.jpg';
import VideoQue from './VideoQue/VideoQue';


const Layout = props => {

  let queArr = [];

  for(let i=0; i<=8; i++) {
     queArr.push(<VideoQue/>)
  }

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.mainContent}>
        <div className={styles.videoContent}>
          <iframe
            title="test"
            width="962"
            height="541.125"
            src="https://www.youtube.com/embed/_Qq25EOvquk"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className={styles.miscVideoInfo}>
          <div className={styles.videoTitle}>
            How to "REALLY" buy a mountain bike
          </div>
          <div className={styles.misc}>
            <div className={styles.viewInfo}>
              <span>300,210 views | May 12, 2018</span>
            </div>
            <div>
              <div className={styles.miscIconWrapper}></div>
            </div>
          </div>
          <div className={styles.channelInfo}>
            <div className={styles.topInfo}>
              <div className={styles.topLeftWrapper}>
                <div className={styles.channelIconWrapper}><img className={styles.channelIcon} src={bobo} alt="youtuber bobo"></img></div>
                <div className={styles.channelName}>
                  <div>Biking With Bobo</div>
                  <div className={styles.subCount}>200k Subscribers</div>
                </div>
                <div className={styles.subButtonWrapper}>
                  <button>Subscribe</button>
                </div>
              </div>
            </div>
            <div className={styles.bottomInfo}></div>
          </div>
        </div>
      </div>
      <div className={styles.thumbNails}>{queArr}</div>
    </div>
  );
}

export default Layout