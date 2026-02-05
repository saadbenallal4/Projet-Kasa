import React from 'react';
import logements from '../data/logements.json';
import Card from "../Card/Card";
import Banner from '../components/Banner/Banner';
import './Home.scss';

function Home() {
    return (
        <div className="home">
            <Banner page="home" />

            {/* Conteneur principal des cards */}
            <div className="cards-container">
                { /* map permet de parcourir un tableau et de générer dynamiquement un composant pour chaque élément (rappel) */}
                {logements.map((logement) => (
                    <Card
                        // key est obligatoire pour identifier chaque élément d’une liste et optimiser le rendu (rappel)
                        key={logement.id}
                        id={logement.id}
                        title={logement.title}
                        cover={logement.cover}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;
