import React, { useState } from 'react';
import './Collapse.scss';
// Importation des icônes flèche haut/bas
import arrowDown from '../../assets/icons/arrow-down.png';
import arrowUp from '../../assets/icons/arrow-up.png';
/*
 * Component Collapse :
 * - useState permet de suivre l’état ouvert/fermé du contenu
 * - isOpen = true → contenu visible
 * - isOpen = false → contenu masqué
 */
function Collapse({ title, children }) {
    // State du composant : ouvert ou fermé ?
    const [isOpen, setIsOpen] = useState(false);

    // Fonction pour inverser l'état au clic
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            {/* En-tête cliquable avec titre et icône */}
            <div className="collapse-header" onClick={toggleCollapse}>
                <span className="collapse-title">{title}</span>
                <img
                    src={isOpen ? arrowUp : arrowDown}
                    alt={isOpen ? 'Réduire' : 'Ouvrir'}
                    className={`collapse-icon ${isOpen ? 'rotate' : ''}`}
                />
            </div>

            {/* Contenu affiché uniquement si isOpen est true */}
            {isOpen && (
                <div className="collapse-content">
                    <p>{children}</p>
                </div>
            )}
        </div>
    );
}

export default Collapse;