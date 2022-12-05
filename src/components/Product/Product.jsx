import "./Product.scss";
import ProductBuy from "../ProductBuy/ProductBuy";

function Product({ id, image, title, code, price, description }) {
    return (
        <div className="container">
            <div className="product">
                <div className="product__details">
                    <div className="product__img-cover">
                        <img className="product__img" src={image} width="300" alt={title}></img>
                    </div>
                    <div className="product__info">
                        <div className="product__title">{title}</div>
                        <div className="product__code">Код товара {code}</div>
                        <div className="product__star">4.9</div>
                        <ProductBuy id={id} price={price} />
                        <div className="product__add-info-group">
                            <div className="product__add-info product__delivery">Бесплатная доставка</div>
                            <div className="product__add-info product__return">Обмен и возврат в течение 14 дней</div>
                        </div>
                    </div>
                </div>
                <div className="product__about">
                    <div>
                        <h2 className="product__about-title">О товаре</h2>
                        <p className="product__about-description">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
