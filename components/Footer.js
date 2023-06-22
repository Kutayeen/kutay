import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/images/moi.jpg" alt="Netlify Logo" className={styles.logo} style={{borderRadius: 100}}/>
      </footer>
    </>
  )
}
