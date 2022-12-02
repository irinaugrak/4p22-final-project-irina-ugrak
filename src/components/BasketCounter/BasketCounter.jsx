import "./BasketCounter.scss";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

function BasketCounter() {
    
    const count = Object.values(useSelector((state) => {
        return state.basket;
    })).reduce((acc, item) => {
        return (acc = acc + item);
    }, 0);
    
    return (
        <div className="basket-counter">
            <Link to="basket" className="basket-counter__title" >
                Корзина
            </Link>
            <span className="basket-counter__num">{count}</span>
        </div>
    );
}

export default BasketCounter;