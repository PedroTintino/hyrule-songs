import styles from './Navbar.module.css'

function Navbar(){
  return(
    <nav className={styles.navbar}>
      <div>
      <img src="public\img\trinity.png" alt="logo" />
      <span>Hyrule Songs</span>
      </div>
    </nav>
  )
}
export default Navbar