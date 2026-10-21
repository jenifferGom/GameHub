import styles from './GameCard.module.css'

function GameCard({ game, isFavorite, onToggle }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={game.image}
          alt={game.name}
          className={styles.image}
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
      </div>
      <div className={styles.body}>
        <span className={styles.genre}>{game.genre}</span>
        <h3 className={styles.name}>{game.name}</h3>
        <p className={styles.platform}>{game.platform}</p>
        <p className={styles.description}>{game.description}</p>
        <button
          className={isFavorite ? styles.active : styles.button}
          onClick={() => onToggle(game.id)}
        >
          {isFavorite ? '♥ En favoritos' : '♡ Agregar a favoritos'}
        </button>
      </div>
    </article>
  )
}

export default GameCard