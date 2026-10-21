import { useState } from 'react'
import './App.css'
import { games } from './data/games'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import Footer from './components/Footer'

function App() {
  const [favorites, setFavorites] = useState([])

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    )
  }

  return (
    <div className="App">
      <Navbar count={favorites.length} />
      <Hero />
      <Catalog
        games={games}
        favorites={favorites}
        onToggle={toggleFavorite}
      />
      <Footer />
    </div>
  )
}

export default App