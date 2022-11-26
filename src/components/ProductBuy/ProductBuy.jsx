import "./ProductBuy.scss";
import ButtonMain from "../ButtonMain/ButtonMain";
import Counter from "../Counter/Counter";

function ProductBuy() {
    return (
        <div className="product-buy">
            <div className="product-buy__top">
                <div className="product-buy__price">12499 &#8381;</div>
                <Counter />
            </div>
            <ButtonMain title="Купить" />
        </div>
    ); 
}

export default ProductBuy;