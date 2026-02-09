import React from "react";
import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import Slideshow from "../components/Slideshow/Slideshow";
import Collapse from "../components/Collapse/Collapse";
import "../pages/Logement.scss"; // assure-toi de créer ce fichier ou de l'ajuster

function Logement() {
    // Récupération de l'id du logement via l'URL
    const { id } = useParams();
    const logement = logements.find((item) => item.id === id);

    // Redirection vers la page 404 si le logement est introuvable
    if (!logement) {
        return <Navigate to="/404" replace />;
    }

    // Générer les étoiles dynamiques selon la note
    const renderStars = (rating) => {
        const totalStars = 5;
        return [...Array(totalStars)].map((_, index) => (
            <span key={index} className={index < rating ? "star filled" : "star"}>
                ★
            </span>
        ));
    };

    return (
        <div className="logement-container">
            <Slideshow pictures={logement.pictures} />

            <div className="logement-header">
                <div className="logement-info">
                    <h1>{logement.title}</h1>
                    <p className="location">{logement.location}</p>
                    <div className="tags">
                        {logement.tags.map((tag, index) => (
                            <span className="tag" key={index}>{tag}</span>
                        ))}
                    </div>
                </div>

                <div className="logement-host-rating">
                    <div className="host">
                        <div className="host-name">
                            <p>{logement.host.name.split(' ')[0]}</p>
                            <p>{logement.host.name.split(' ')[1]}</p>
                        </div>
                        <img src={logement.host.picture} alt={logement.host.name} />
                    </div>
                    <div className="rating">{renderStars(Number(logement.rating))}</div>
                </div>
            </div>

            {/* ✅ Collapse Description et Équipements ici */}
            <div className="logement-collapses">
                <Collapse title="Description" content={logement.description} />
                <Collapse
                    title="Équipements"
                    content={
                        <ul>
                            {logement.equipments.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    }
                />
            </div>
        </div>
    );
}

export default Logement;

