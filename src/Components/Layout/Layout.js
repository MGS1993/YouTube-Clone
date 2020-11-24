import React, { Component } from 'react';
import styles from './Layout.module.css';
import bobo from '../../Assets/Images/bobo.jpg';
import VideoQue from './VideoQue/VideoQue';


class Layout extends Component {

  state = {
    showClicked: false,
    clickedText: 'Show more',
    showRemainingText: '180px',
    // hideRemainingText: '180px',
  }

  showMoreClicked = () => {
    let clickedVar
    let textVar
    if(this.state.showRemainingText === 'auto') {
      clickedVar = '180px';
      textVar = "Show More"
    } else if (this.state.showRemainingText === '180px') {
      clickedVar = 'auto'
      textVar = "Show Less"
    }
      this.setState({
        showRemainingText: clickedVar, 
        clickedText: textVar
      })
  }

  render(){
    let queArr = [];
    let styledDiv = {
    height: this.state.showRemainingText,
    display: `flex`,
    flexDirection: `column`,
    borderBottom: `1px solid #E0E0E0`}

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
            <div style={styledDiv}>
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
              <div className={styles.bottomInfo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus dapibus finibus. Nam vel bibendum eros. In hac habitasse platea dictumst. Integer ut massa a eros iaculis porttitor. Morbi accumsan facilisis velit, sed tincidunt diam euismod eu. Vestibulum euismod egestas ipsum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus dapibus finibus. Nam vel bibendum eros. In hac habitasse platea dictumst. Integer ut massa a eros iaculis porttitor. Morbi accumsan facilisis velit, sed tincidunt diam euismod eu. Vestibulum euismod egestas ipsum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus dapibus finibus. Nam vel bibendum eros. In hac habitasse platea dictumst. Integer ut massa a eros iaculis porttitor. Morbi accumsan facilisis velit, sed tincidunt diam euismod eu. Vestibulum euismod egestas ipsum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus dapibus finibus. Nam vel bibendum eros. In hac habitasse platea dictumst. Integer ut massa a eros iaculis porttitor. Morbi accumsan facilisis velit, sed tincidunt diam euismod eu. Vestibulum euismod egestas ipsum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus dapibus finibus. Nam vel bibendum eros. In hac habitasse platea dictumst. Integer ut massa a eros iaculis porttitor. Morbi accumsan facilisis velit, sed tincidunt diam euismod eu. Vestibulum euismod egestas ipsum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus dapibus finibus. Nam vel bibendum eros. In hac habitasse platea dictumst. Integer ut massa a eros iaculis porttitor. Morbi accumsan facilisis velit, sed tincidunt diam euismod eu. Vestibulum euismod egestas ipsum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus dapibus finibus. Nam vel bibendum eros. In hac habitasse platea dictumst. Integer ut massa a eros iaculis porttitor. Morbi accumsan facilisis velit, sed tincidunt diam euismod eu. Vestibulum euismod egestas ipsum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus dapibus finibus. Nam vel bibendum eros. In hac habitasse platea dictumst. Integer ut massa a eros iaculis porttitor. Morbi accumsan facilisis velit, sed tincidunt diam euismod eu. Vestibulum euismod egestas ipsum.
              </div>
              <div className={styles.show}>
                <p onClick={this.showMoreClicked}>{this.state.clickedText}</p>
              </div>
            </div>
            <div className={styles.commentsWrapper}>
              <div className={styles.commentHeader}>
                <div className={styles.commentHeaderChildDiv}>
                  <p className={styles.firstP}>102 Comments</p>
                  <p className={styles.secondP}>SORT BY</p>
                  </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className={styles.thumbNails}>{queArr}</div>
      </div>
    );
  }
  

  
}

export default Layout