import './Header.scss';
import Logo from '../Logo/Logo';
import BasketCounter from '../BasketCounter/BasketCounter';
import Phone from '../Phone/Phone';
import ButtonSign from '../ButtonSign/ButtonSign';
import Navigation from '../Navigation/Navigation';
import Search from '../Search/Search';

function Header() {
    return (
        <header className="header">
            <div className="header-top">
                <div className="container">
                    <div className="header-top-inner">
                        <Logo type="header" className="header-top-inner__logo"/>
                        <Phone type="header" />
                        <div className="header-top-inner__actions">
                            <BasketCounter />
                            <ButtonSign className="header-top-inner__btn-sign" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="container">
                    <div className="header-bottom-inner">
                        <Navigation type="header"/>
                        <Search />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
