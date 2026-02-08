import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../data/logements.json';
import Slideshow from '../components/Slideshow/Slideshow';

/* Récupère l'identifiant du logement depuis l'URL avec useParams()
 * Recherche le logement correspondant dans le fichier logements.json
 * Redirige vers la page 404 si l'ID n'existe pas
 */

function Logement() {
    // Récupération de l'id passé dans l'URL via le router
    const { id } = useParams();

    // Recherche du logement correspondant dans le JSON
    const logement = logements.find((item) => item.id === id);

    // Si aucun logement trouvé, on peut rediriger ou afficher un message d'erreur
    if (!logement) {
        return <div>Logement introuvable</div>; // ⚠️ À remplacer par une vraie redirection 404
    }

    return (
        <div className="logement">
            {/* Affichage du composant Slideshow avec les images du logement */}
            <Slideshow pictures={logement.pictures} />

            {/* 🔽 Plus tard, ajouter ici le titre, localisation, tags, host, rating, description, équipements, etc. */}
        </div>
    );
}

export default Logement;
