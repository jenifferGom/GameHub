import styles from './Hero.module.css'

function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <p className={styles.greeting}>Bienvenido a Gamehub</p>
      <h1 className={styles.title}>Descubre tu próximo videojuego</h1>
      <p className={styles.text}>
        Explora el catálogo y guarda tus títulos favoritos.
      </p>
      <a href="#catalogo" className={styles.button}>Explora ahora</a>
    </section>
  )
}

export default Hero