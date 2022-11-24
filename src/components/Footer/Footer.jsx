import './Footer.scss';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <Logo type="footer"  className="footer-top__logo" />
                    <Navigation type="footer" />
                </div>
                <div className="footer-bottom"></div>
            </div>
        </footer>
    );
}

export default Footer;