import "./Basket.scss";
import BasketItem from "../BasketItem/BasketItem";
import { useSelector } from "react-redux";

function Basket() {
    const count = Object.values(useSelector((state) => state.basket)).reduce((acc, item) => {
        return (acc = acc + item);
    }, 0);
    const products = useSelector(state => state.products.entities);
    const basket = useSelector(state => state.basket);
    
    return (
        <section className="basket">
            <div className="cart">
                <div className="cart-main">
                    <h1 className="cart-main__title">Корзина</h1>
                    <ul className="cart-main__list">
                        {products
                            .filter((product) => !!basket[product.id])
                            .map((item) => {
                                return (
                                    <BasketItem
                                        className="cart-main__item"
                                        key={item.id}
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        code={item.code}
                                        price={item.price}
                                    />
                                );
                            })}
                    </ul>
                </div>
                <div className="cart-footer">
                    <div className="cart-footer__num">{count} товара</div>
                    <div className="cart-footer__amount">
                        <span>К оплате:&nbsp;</span>
                        <span>
                            {products.reduce((acc, product) => {
                                if(!!basket[product.id]) {
                                    acc = acc + product.price * basket[product.id];
                                }
                                return acc;
                                }, 0)}
                            &nbsp;
                        </span>
                        &#8381;
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Basket;