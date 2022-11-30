import "./IndexPage.scss";
import Caption from "../../components/Caption/Caption";
import Catalog from "../../components/Catalog/Catalog";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../store/products/productsSlice";

function IndexPage() {
    const [ products, isLoading ] = useSelector((state) => [ state.products.entities, state.products.loading ]);
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(getProducts());
    }, []);
    
    return (
        <div className="IndexPage">
            <Caption />
            { !isLoading && <Catalog products={products} /> }
            { isLoading && <p>Загрузка данных...</p> }
        </div>
    );
}

export default IndexPage;