import "./Catalog.scss";
import Card from "./Card/Card";

function Catalog({ products }) {
    return (
        <section className="catalog">
            <div className="container">
                <div className="catalog__list">
                    {products.map((item) => {
                        return (
                            <Card
                                key={item.id}
                                id={item.id}
                                category={item.category}
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                price={item.price}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Catalog;
