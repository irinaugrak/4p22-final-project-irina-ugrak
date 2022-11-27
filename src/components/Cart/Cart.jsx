import "./Cart.scss";
import CartItem from "../CartItem/CartItem";

function Cart() {
    const cartList = [
        {
            id: 1,
            title: "Стул Баланс",
            image: "https://dl.dropbox.com/s/kg056w1espwqv5v/chair1.jpg?dl=0",
            code: "111111",
            price: 6999,
        },
        {
            id: 2,
            title: "Кресло Ханна",
            image: "https://dl.dropbox.com/s/c8of0tk3rpjmj9u/chair2.jpg?dl=0",
            code: "222222",
            price: 12499,
        },
        {
            id: 3,
            title: "Кресло Гоа",
            image: "https://dl.dropbox.com/s/y29ewh9409kr7r2/chair3.jpg?dl=0",
            code: "333333",
            price: 14499,
        },
    ];
    return (
        <section className="cart">
            <div className="cart-main">
                <h1 className="cart-main__title">Корзина</h1>
                <ul className="cart-main__list">
                    {cartList.map((item) => {
                        return (
                            <CartItem
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
                <div className="cart-footer__num">3 товара</div>
                <div className="cart-footer__amount">
                    К оплате: 28000 &#8381;
                </div>
            </div>
        </section>
    );
}

export default Cart;
