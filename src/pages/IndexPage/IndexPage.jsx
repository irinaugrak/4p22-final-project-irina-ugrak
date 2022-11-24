import "./IndexPage.scss";
import Main from "../../components/Main/Main";
import { useEffect, useState } from "react";

function IndexPage() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("./data.json")
            .then((response) => response.json())
            .then((result) => {
                setProducts(result);
            });
    }, []);
    return (
        <div className="IndexPage">
            <Main products={products} />
        </div>
    );
}

export default IndexPage;