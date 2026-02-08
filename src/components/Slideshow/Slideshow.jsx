import React, { useState } from 'react';
import './Slideshow.scss';
import arrowLeft from '../../assets/icons/arrow-left.png';
import arrowRight from '../../assets/icons/arrow-right.png';

/**
 * Composant Slideshow (carrousel d'images)
 * 
 * Props attendue :
 * - pictures (Array) : un tableau d'URL d’images à afficher
 * 
 * Logique :
 * - On utilise useState pour suivre l’index de l’image actuellement affichée
 * - Les fonctions nextSlide() et prevSlide() permettent de naviguer entre les images (rappel)
 * - Le modulo (%) permet de revenir au début ou à la fin selon la direction (rappel) 
 */
function Slideshow({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0); // État local pour l'index de l’image affichée

    // Va à l’image suivante
    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % pictures.length);
    };

    // Va à l’image précédente
    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length);
    };

    return (
        <div className="slideshow">
            <img
                src={pictures[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="slideshow-image"
            />

            {pictures.length > 1 && (
                <>
                    <img
                        src={arrowLeft}
                        alt="Précédent"
                        className="arrow arrow-left"
                        onClick={prevSlide}
                    />
                    <img
                        src={arrowRight}
                        alt="Suivant"
                        className="arrow arrow-right"
                        onClick={nextSlide}
                    />
                    <div className="slideshow-counter">
                        {currentIndex + 1}/{pictures.length}
                    </div>
                </>
            )}
        </div>
    );
}

export default Slideshow;
