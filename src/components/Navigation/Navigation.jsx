import './Navigation.scss';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Navigation({type}) {
    const { category } = useParams();
    console.log(category);
    return (
        <nav className={`navigation navigation-${type}`}>
            <ul className={`navigation__list navigation-${type}__list`}>
                <Link to={"/sofas-and-armchairs"} className="navigation__link">
                    <li
                        className={`navigation__item navigation-${type}__item ${
                            category === "sofas-and-armchairs" ? `navigation-${type}__item_current` : ""
                        }`}>
                        Диваны и кресла
                    </li>
                </Link>
                <Link to={"/tables-and-chairs"} className="navigation__link">
                    <li
                        className={`navigation__item navigation-${type}__item ${
                            category === "tables-and-chairs" ? `navigation-${type}__item_current` : ""
                        }`}>
                        Столы и стулья
                    </li>
                </Link>
                <Link to={"/cabinets-and-shelving"} className="navigation__link">
                    <li
                        className={`navigation__item navigation-${type}__item ${
                            category === "cabinets-and-shelving" ? `navigation-${type}__item_current` : ""
                        }`}>
                        Шкафы и стеллажи
                    </li>
                </Link>
                <Link to={"/beds-and-mattresses"} className="navigation__link">
                    <li
                        className={`navigation__item navigation-${type}__item ${
                            category === "beds-and-mattresses" ? `navigation-${type}__item_current` : ""
                        }`}>
                        Кровати и матрасы
                    </li>
                </Link>
                <Link to={"/chests-of-drawers-and-cabinets"} className="navigation__link">
                    <li
                        className={`navigation__item navigation-${type}__item ${
                            category === "chests-of-drawers-and-cabinets" ? `navigation-${type}__item_current` : ""
                        }`}>
                        Комоды и тумбы
                    </li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navigation;