import "./IndexPage.scss";
import Caption from "../../components/Caption/Caption";
import Catalog from "../../components/Catalog/Catalog";
import { useEffect, useState } from "react";

function IndexPage() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("./4p22-final-project-irina-ugrak/data.json")
            .then((response) => response.json())
            .then((result) => {
                setProducts(result);
            });
    }, []);
    return (
        <div className="IndexPage">
            <Caption />
            <Catalog products={products} />
        </div>
    );
}

export default IndexPage;