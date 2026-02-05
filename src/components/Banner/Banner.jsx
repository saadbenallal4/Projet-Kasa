import './Banner.scss';
import falaise from '../../assets/images/falaise.png';
import montagnes from '../../assets/images/montagnes.png';

// Composant Banner réutilisable qui affiche une image et un texte superposé
function Banner({ page }) {
    const image = page === "about" ? montagnes : falaise;

    return (
        <div className="banner">
            <img src={image} alt="Bannière" className="banner-img" />
            {/* Affiche du texte seulement sur la page d'accueil */}
            {page !== "about" && (
                <div className="banner-text">Chez vous, partout et ailleurs</div>
            )}
        </div>
    );
}

export default Banner;
