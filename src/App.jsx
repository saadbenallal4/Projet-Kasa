// Import des composants de React Router
// Routes contient toutes les routes
import { Routes, Route } from 'react-router-dom'

// Import des pages (chaque page est un composant)
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import Logement from './pages/Logement'
import Page404 from './pages/Page404'

//App = composant principal de l'application (rappel)
function App() {
  return (
    // Toutes les routes sont définies ici
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/logement/:id" element={<Logement />} />
      {/* Route pour toutes les URLs non définies (erreur 404) */}
      <Route path="*" element={<Page404 />} />

    </Routes>
  )
}

// Exporte App pour pouvoir l’utiliser dans main.jsx (rappel)
export default App
