import GameCard from './Gamecard'
import styles from './Catalog.module.css'

function Catalog({ games, favorites, onToggle }) {
  return (
    <section id="catalogo" className={styles.catalog}>
      <div className={styles.container}>
        <h2 className={styles.title}>Catálogo</h2>
        <p className={styles.subtitle}>
          Descubre y organiza tus videojuegos.
        </p>

        <div className={styles.grid}>
          {games.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              isFavorite={favorites.includes(game.id)}
              onToggle={onToggle}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Catalog