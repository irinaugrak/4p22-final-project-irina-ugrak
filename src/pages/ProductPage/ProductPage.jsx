import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.scss";

function ProductPage() {
    const [ product, setProduct ] = useState({});
    const { userId } = useParams();
    useEffect(() => {
        fetch(`./${userId}.json`)
            .then((response) => response.json())
            .then((result) => {
                setProduct(result);
            });
    }, [userId]);

    return (
        <div>
            <div>{product.title}</div>
            <img src={product.image} alt={product.title} />
        </div>
    );
}

export default ProductPage;
