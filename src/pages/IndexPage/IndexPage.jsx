import "./IndexPage.scss";
import Caption from "../../components/Caption/Caption";
import Catalog from "../../components/Catalog/Catalog";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../store/products/productsSlice";
import { useParams } from "react-router-dom";

function IndexPage() {
    const { category } = useParams();

    const search = useSelector((state) => state.search);
    const [ products, isLoading ] = useSelector((state) => [ state.products.entities, state.products.loading ]);

    const [ categoryProducts, setCategoryProducts ] = useState(products);

    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getProducts());
    }, []);

    useEffect(() => {
        console.log('search', search);
        console.log('products', products);
        setCategoryProducts(
            products.filter(
                (item) => item.category === category && item.title.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [products, category, search]);

    return (
        <div className="IndexPage">
            <Caption title={category}/>
            {!isLoading && <Catalog products={categoryProducts} />}
            {isLoading && <p>Загрузка данных...</p>}
        </div>
    );
}

export default IndexPage;