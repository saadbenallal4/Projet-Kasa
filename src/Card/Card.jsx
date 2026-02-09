import React from 'react';
import { Link } from 'react-router-dom'; // Import du composant de navigation
import './Card.scss';

/**
 * Composant de carte logement
 *
 * Props :
 * - id : identifiant unique du logement (utilisé pour le lien)
 * - title : titre du logement
 * - cover : URL de l’image principale
 *
 * Comportement :
 * - La carte est cliquable et redirige vers `/logement/:id`
 */
function Card({ id, title, cover }) {
    return (
        <Link to={`/logement/${id}`} className="card"> {/* 👉 Lien vers la page logement */}
            <img src={cover} alt={title} className="card-img" />
            <div className="card-title">{title}</div>
        </Link>
    );
}

export default Card;
