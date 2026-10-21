import styles from './Navbar.module.css'

function Navbar({ count }) {
  return (
    <nav className={styles.navbar}>
      <a href="#inicio" className={styles.brand}>
        <span className={styles.icon}>🎮</span>
        <span className={styles.logo}>Gamehub</span>
      </a>
      <ul className={styles.links}>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#catalogo">Catálogo</a></li>
        <li>
          <a href="#favoritos" className={styles.favLink}>
            Favoritos <span className={styles.badge}>{count}</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar