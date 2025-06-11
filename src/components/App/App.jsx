import React from 'react';
import styles from './App.module.css';
import SearchResults from '../SearchResults/SearchResults'
import SearchBar from '../SearchBar/SearchBar';
import Track from '../Track/Track';

function App() {
  return (
    <div>
      <h1 className={styles['top-header']}>XIERA</h1>
      <h3 className={styles.subtitle}>A Spotify playlist creator</h3>
      <SearchBar />
      <div className={styles.container}>
        <SearchResults />
      </div>
        <footer className={styles.footer}>2025 XIERA Corp. All Rights Reserved</footer>
    </div>

  )
}

export default App;