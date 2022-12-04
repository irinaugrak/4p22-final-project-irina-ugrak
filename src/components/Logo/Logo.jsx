import "./Logo.scss";
import { Link } from "react-router-dom";

function Logo({type, className=''}) {
    return (
        <Link to="/sofas-and-armchairs" className={`logo ${className}`}>
            <div className={`logo__container`}>
                <span className={`logo__title logo-${type}__title`}>Модерн</span>
                <span className={`logo__slogan logo-${type}__slogan`}>Уют вашего дома</span>
            </div>
        </Link>
    );
}

export default Logo;