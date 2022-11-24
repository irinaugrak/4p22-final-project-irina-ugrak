import "./BasketCounter.scss";
import { Link } from 'react-router-dom';

function BasketCounter() {
    return (
        <div className="basket-counter">
            <Link to="basket" className="basket-counter__title" >
                Корзина
            </Link>
            <span className="basket-counter__num">0</span>
        </div>
    );
}

export default BasketCounter;