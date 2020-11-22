import React from 'react';
import styles from './Toolbar.module.css';
import SearchBar from './SearchBar/SearchBar';
import LeftNav from './LeftNav/LeftNav';
import RightNav from './RightNav/RightNav';


const ToolBar = props => {


  return(
    <div className={styles.ToolBar}>
      <LeftNav />
      <SearchBar />
      <RightNav />
    </div>
  )
}

export default ToolBar;