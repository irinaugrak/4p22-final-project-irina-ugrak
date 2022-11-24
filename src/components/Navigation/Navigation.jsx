import './Navigation.scss';

function Navigation({type}) {
    return (
        <nav className={`navigation navigation-${type}`}>
            <ul className={`navigation__list navigation-${type}__list`}>
                <li className={`navigation__item navigation-${type}__item navigation-${type}__item_current`}>Стулья и кресла</li>
                <li className={`navigation__item navigation-${type}__item`}>Кровати и матрасы</li>
                <li className={`navigation__item navigation-${type}__item`}>Шкафы и комоды</li>
                <li className={`navigation__item navigation-${type}__item`}>Мебель для кухни</li>
                <li className={`navigation__item navigation-${type}__item`}>Товары для дома</li>
            </ul>
        </nav>
    );
}

export default Navigation;