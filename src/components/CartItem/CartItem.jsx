import "./CartItem.scss";
import Counter from "../Counter/Counter";
import ButtonCancel from "../ButtonCancel/ButtonCancel";

function CartItem({ className, id, title, image, code, price }) {
    
    return (
        <div className={`cart-item ${className}`}>
            <img className="cart-item__img" width="76" src={image} alt={title} />
            <div className="cart-item__name">
                <div className="cart-item__title">{title}</div>
                <div className="cart-item__code">Код товара {code}</div>
            </div>
            <div className="cart-item__action">
                <Counter />
                <div className="cart-item__price">{price} &#8381;</div>
                <ButtonCancel className="cart-item__cancel" />
            </div>
        </div>
    );
}

export default CartItem;