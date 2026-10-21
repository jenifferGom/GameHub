import GameCard from './Gamecard'
import { games } from '../data/games'
import styles from './Catalog.module.css'

function Catalog() {
  return (
    <section id="catalogo" className={styles.catalog}>
      <div className={styles.container}>
        <h2 className={styles.title}>Catálogo</h2>
        <p className={styles.subtitle}>
          Descubre y organiza tus videojuegos.
        </p>

        <div className={styles.grid}>
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Catalog