import React, { useState } from "react";
import "./Collapse.scss";

// Importation des flèches personnalisées (vers le haut et le bas)
import arrowDown from "../../assets/icons/arrow-down.png";
import arrowUp from "../../assets/icons/arrow-up.png";

// Composant Collapse qui affiche un bloc pliable (accordéon)
function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => setIsOpen(!isOpen);

    return (
        <div className="collapse">
            <div className="collapse-header" onClick={toggleCollapse}>
                <h3 className="collapse-title">{title}</h3>
                <img
                    src={isOpen ? arrowUp : arrowDown}
                    alt={isOpen ? "fermer" : "ouvrir"}
                    className={`collapse-icon ${isOpen ? "open" : ""}`}
                />
            </div>

            {isOpen && (
                <div className="collapse-content">
                    {/* Si children est un tableau, on crée une liste. Sinon, on affiche tel quel. */}
                    {Array.isArray(children) ? (
                        <ul>
                            {children.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <>{children}</> // Ici on n'ajoute aucune balise inutile
                    )}
                </div>
            )}
        </div>
    );
}


export default Collapse;

