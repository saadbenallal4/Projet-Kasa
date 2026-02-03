// Import des modules nécessaires

import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/logo/logo.png';

// Composant Header
function Header() {
    return (
        <header className="header">
            {/* Logo de Kasa */}
            <img src={logo} alt="Logo Kasa" className="header__logo" />

            {/* Navigation principale */}
            <nav className="header__nav">
                <Link to="/" className="header__link">Accueil</Link>
                <Link to="/about" className="header__link">A Propos</Link>
            </nav>
        </header>
    );
}

// Export du composant
export default Header;
