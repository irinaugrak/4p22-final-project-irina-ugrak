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

                <li className={`navigation__item navigation-${type}__item`}>
                    Шкафы и стеллажи
                </li>
                <li className={`navigation__item navigation-${type}__item`}>Кровати и матрасы</li>
                <li className={`navigation__item navigation-${type}__item`}>Комоды и тумбы</li>
            </ul>
        </nav>
    );
}

export default Navigation;