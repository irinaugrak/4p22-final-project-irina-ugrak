import './Navigation.scss';

function Navigation({type}) {
    return (
        <nav className={`navigation navigation-${type}`}>
            <ul className={`navigation__list navigation-${type}__list`}>
                <li className={`navigation__item navigation-${type}__item navigation-${type}__item_current`}>
                    Диваны и кресла
                </li>
                <li className={`navigation__item navigation-${type}__item`}>Столы и стулья</li>
                <li className={`navigation__item navigation-${type}__item`}>Шкафы и стеллажи</li>
                <li className={`navigation__item navigation-${type}__item`}>Кровати и матрасы</li>
                <li className={`navigation__item navigation-${type}__item`}>Комоды и тумбы</li>
            </ul>
        </nav>
    );
}

export default Navigation;