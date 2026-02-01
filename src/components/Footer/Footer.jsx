import './Footer.scss';
import logo from '../../assets/logo/logo2.png';

function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt="Kasa Logo" className="footer__logo" />
            <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;