import './Navigation.scss';

function Navigation({type}) {
    return (
        <nav class={`navigation navigation-${type}`}>
            <ul class={`navigation__list navigation-${type}__list`}>
                <li class={`navigation__item navigation-${type}__item navigation-${type}__item_current`}>Стулья и кресла</li>
                <li class={`navigation__item navigation-${type}__item`}>Кровати и матрасы</li>
                <li class={`navigation__item navigation-${type}__item`}>Шкафы и комоды</li>
                <li class={`navigation__item navigation-${type}__item`}>Мебель для кухни</li>
                <li class={`navigation__item navigation-${type}__item`}>Товары для дома</li>
            </ul>
        </nav>
    );
}

export default Navigation;