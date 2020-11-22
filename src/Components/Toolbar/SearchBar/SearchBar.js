import React from 'react';
import styles from './SearchBar.module.css';
import search from '../../../Assets/Images/search.svg';

const SearchBar = props => {


  return(
    <div className={styles.SearchBar}>

      <div className={styles.inputBar}>
        <input type="text"></input>
      </div>

      <div className={styles.inputBtn}>
        <button>
          <img className={styles.magGlass} src={search} alt="magnifying lense"/>
        </button>
      </div>

    </div>
  )
}


export default SearchBar