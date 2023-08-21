import { Link } from "react-router-dom";
import styles from './NavBar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <h1 className={`${styles.brand}${styles.logo}`}> Pousada <span>Secreta</span></h1>
      <ul className={styles.linksList}>
        <li><Link className={styles.linksList} to='/home'> Home </Link></li>
        <li><Link className={styles.linksList} to='/quartos'> Quartos</Link></li>
        <li><Link className={styles.linksList} to='/about'> Sobre</Link></li>
      </ul>
    </nav>

  )
}

export default Navbar;