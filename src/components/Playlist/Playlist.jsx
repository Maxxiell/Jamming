import React from 'react'
import styles from '../Playlist/Playlist.module.css'

const Playlist = () => {
  return (
    <>
    <div className={styles.playlistcontainer}>
      <div className={styles.playlistbox}>
        <div className={styles.playlistinfo}>
          <h2 className={styles.headerplaylist}>Add Playlist</h2>
          <input className={styles.playlistinput} type="text" placeholder="Create Playlist Name"/>
        </div>
        <button className={styles.addplaylist}><span>Save</span></button>
      </div> 
    </div>
    
    </>
  )
}

export default Playlist