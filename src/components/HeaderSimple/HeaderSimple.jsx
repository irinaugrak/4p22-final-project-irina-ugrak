import "./HeaderSimple.scss";
import Logo from "../Logo/Logo";
import Phone from "../Phone/Phone";

function HeaderSimple() {
    return (
        <footer className="header-simple">
            <div className="container">
                <div className="header-simple-top">
                    <Logo type="header" className="header-simple-top__logo" />
                    <Phone type="header" className="header-simple-top__phone" />
                </div>
            </div>
        </footer>
    );
}

export default HeaderSimple;