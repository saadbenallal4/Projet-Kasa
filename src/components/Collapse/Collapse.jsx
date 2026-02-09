import React, { useState } from "react";
import "./Collapse.scss";

// Importation des flèches personnalisées (vers le haut et le bas)
import arrowDown from "../../assets/icons/arrow-down.png";
import arrowUp from "../../assets/icons/arrow-up.png";

// Composant Collapse qui affiche un bloc pliable (accordéon)
function Collapse({ title, content }) {
    // État local pour savoir si le collapse est ouvert ou fermé
    const [isOpen, setIsOpen] = useState(false);

    // Inverse l'état à chaque clic sur l'en-tête
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            {/* En-tête cliquable avec titre et icône */}
            <div className="collapse-header" onClick={toggleCollapse}>
                <h3 className="collapse-title">{title}</h3>
                <img
                    src={isOpen ? arrowUp : arrowDown}
                    alt={isOpen ? "fermer" : "ouvrir"}
                    className="collapse-icon"
                />
            </div>

            {/* Contenu conditionnel : affiché seulement si isOpen est true */}
            {isOpen && (
                <div className="collapse-content">
                    {/* Si content est un tableau, afficher une liste */}
                    {Array.isArray(content) ? (
                        <ul>
                            {content.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        // Sinon afficher le contenu en paragraphe
                        <p>{content}</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default Collapse;

