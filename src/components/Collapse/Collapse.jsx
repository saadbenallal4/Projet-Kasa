import { useState } from "react";
import "./Collapse.scss";

// Importation de l’icône (une seule suffit)
import arrowDown from "../../assets/icons/arrow-down.png";

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="collapse">
            <div className="collapse-header" onClick={toggleCollapse}>
                <h3 className="collapse-title">{title}</h3>

                <img
                    src={arrowDown}
                    alt={isOpen ? "fermer" : "ouvrir"}
                    className={`collapse-icon ${isOpen ? "open" : ""}`}
                />
            </div>

            {isOpen && (
                <div className="collapse-content">
                    {/* Si children est un tableau, on affiche une liste */}
                    {Array.isArray(children) ? (
                        <ul>
                            {children.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        children
                    )}
                </div>
            )}
        </div>
    );
}

export default Collapse;
