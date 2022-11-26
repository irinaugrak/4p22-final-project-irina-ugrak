import "./Product.scss";
import ProductBuy from "../ProductBuy/ProductBuy";

function Product({ product }) {
    return (
        <div className="container">
            <div className="product">
                <div className="product__details">
                    <div className="product__img">
                        <img src={product.image} width="300" alt={product.title}></img>
                    </div>
                    <div className="product__info">
                        <div className="product__title">{product.title}</div>
                        <div className="product__code">Код товара {product.code}</div>
                        <div className="product__star">4.9</div>
                        <ProductBuy />
                        <div className="product__add-info product__delivery">Бесплатная доставка</div>
                        <div className="product__add-info product__return">Обмен и возврат в течение 14 дней</div>
                    </div>
                </div>
                <div className="product__about">
                    <div>
                        <h2 className="product__about-title">О товаре</h2>
                        <p className="product__about-description">{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
