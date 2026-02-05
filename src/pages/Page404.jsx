import React from "react";
import { Link } from "react-router-dom";
import "./Page404.scss";

function Page404() {
    return (
        <div className="page-404">
            <h1 className="error-code">404</h1>
            <p className="error-text">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="back-home">Retourner sur la page d’accueil</Link>
        </div>
    );
}

export default Page404;
