import "./BasketItem.scss";
import Counter from "../Counter/Counter";
import ButtonCancel from "../ButtonCancel/ButtonCancel";

function BasketItem({ className, id, title, image, code, price }) {
    return (
        <div className={`cart-item ${className}`}>
            <div className="cart-item__info">
                <img className="cart-item__img" width="76" src={image} alt={title} />
                <div className="cart-item__name">
                    <div className="cart-item__title">{title}</div>
                    <div className="cart-item__code">Код товара {code}</div>
                </div>
            </div>
            <div className="cart-item__action">
                <Counter id={id} />
                <div className="cart-item__price">{price} &#8381;</div>
                <ButtonCancel id={id} className="cart-item__cancel" />
            </div>
        </div>
    );
}

export default BasketItem;