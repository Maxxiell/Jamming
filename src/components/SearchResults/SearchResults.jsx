import React from 'react';
import styles from '../SearchResults/SearchResults.module.css';
import Track from '../Track/Track';
import Playlist from '../Playlist/Playlist'

const SearchResults = () => {
  return (
    <div>
      <div className={styles.result}>
        <div className={styles.resultreal}>
          <Track/>
        </div>
        <div className={styles.resultreal}>
          <Playlist/>
          <Track/>
          <Track/>
        </div>

      </div>
    </div>
  )
}

export default SearchResults;