import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.scss";
import Product from "../../components/Product/Product";

function ProductPage() {
    const [product, setProduct] = useState({});
    const { userId } = useParams();
    useEffect(() => {
        fetch(`./${userId}.json`)
            .then((response) => response.json())
            .then((result) => {
                setProduct(result);
            });
    }, [userId]);

    return (
        <div className="ProductPage">
            <Product 
                id={userId} 
                image={product.image} 
                title={product.title} 
                code={product.code}
                price={product.price}
                description={product.description} />
        </div>
    );
}

export default ProductPage;
