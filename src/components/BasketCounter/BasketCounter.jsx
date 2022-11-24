import "./BasketCounter.scss";

function BasketCounter() {
    return (
        <div className="basket-counter">
            <a className="basket-counter__title" href="./">
                Корзина
            </a>
            <span className="basket-counter__num">0</span>
        </div>
    );
}

export default BasketCounter;