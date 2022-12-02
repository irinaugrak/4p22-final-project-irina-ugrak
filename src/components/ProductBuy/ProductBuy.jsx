import "./ProductBuy.scss";
import ButtonMain from "../ButtonMain/ButtonMain";
import Counter from "../Counter/Counter";
import { Link } from "react-router-dom";

function ProductBuy({ id, price }) {
    return (
        <div className="product-buy">
            <div className="product-buy__top">
                <div className="product-buy__price">{price} &#8381;</div>
                <Counter id={id} />
            </div>
            <Link to="/basket">
                <ButtonMain title="Купить" />
            </Link>
        </div>
    ); 
}

export default ProductBuy;