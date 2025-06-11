import React from 'react';
import styles from '../Track/Track.module.css';

const Track = () => {
  return (
    <>
    <div className={styles.trackcontainer}>
      <div className={styles.trackarray}>
        <img src="" alt="" />
        <div className={styles.trackinfo}>
          <h1 className={styles.trackname}>Haze</h1>
          <h2>Magnetic Family</h2>
        </div>
        <button className={styles.addtrack}><span>+</span></button>
      </div> 
    </div>
    </>
  )
}

export default Track;