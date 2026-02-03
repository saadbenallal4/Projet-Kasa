import React from 'react';
import '../Card/Card.scss';

// Component de carte qui affiche l'image de couverture + le titre
function Card({ id, title, cover }) {
    return (
        <div className="card" key={id}>
            <img src={cover} alt={title} className="card-img" />
            <div className="card-title">{title}</div>
        </div>
    );
}

export default Card;
