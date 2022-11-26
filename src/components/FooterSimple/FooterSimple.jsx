import "./FooterSimple.scss";
import Logo from "../Logo/Logo";
import Phone from "../Phone/Phone";

function FooterSimple() {
    return (
        <footer className="footer-simple">
            <div className="container">
                <div className="footer-simple-top">
                    <Logo type="footer" className="footer-simple-top__logo" />
                    <div className="footer-simple-top__copyright">&#169; Все права защищены</div>
                    <Phone type="footer" className="footer-simple-top__phone" />
                </div>
            </div>
        </footer>
    );
}

export default FooterSimple;