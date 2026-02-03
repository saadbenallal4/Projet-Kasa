import './Banner.scss';
import falaise from '../../assets/images/falaise.png';

function Banner() {
    return (
        <div className="banner">
            <img src={falaise} alt="Bannière" className="banner-img" />
            <div className="banner-text">Chez vous, partout et ailleurs</div>
        </div>
    );
}

export default Banner;
