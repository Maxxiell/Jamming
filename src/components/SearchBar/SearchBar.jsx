import React from 'react';
import styles from '../SearchBar/SearchBar.module.css';

const SearchBar = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <div>
        <form className={styles.searchform} onSubmit={handleSubmit} action="">
            <input className={styles.searchinput} type="text" placeholder="Artist, Song, Album"/>
            <input className={styles.searchbutton} type="submit" value="Search" />   
        </form>
    </div>
  )
}

export default SearchBar;