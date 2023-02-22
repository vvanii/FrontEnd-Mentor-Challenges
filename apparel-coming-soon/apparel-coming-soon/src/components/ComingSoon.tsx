import styles from './ComingSoon.module.css';

export function ComingSoon(){
  return(
    <div className={styles.root}>
      <img src="/src/assets/hero-desktop.jpg" alt="hero image" className={styles.heroImg}/>

      <img src="/src/assets/logo.svg" alt="logo" className={styles. logo}/>

      <h1>WE'RE</h1>
      <h1>COMING SOON</h1>
    </div>
  )
}