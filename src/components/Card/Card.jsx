import PropTypes from "prop-types";
import "./Card.scss";
import ButtonAdd from "../ButtonAdd/ButtonAdd";
import Counter from "../Counter/Counter";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addToBasketFromCatalog } from "../../store/basket/basketSlice";

function Card({ id, image, title, price }) {
    const countInBasket = useSelector((state) => (state.basket[id] ? state.basket[id] : 0));
    const dispatch = useDispatch();
    const btnAddClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(addToBasketFromCatalog({ id: id, count: 1 }));
    };
    return (
        <Link to={`${id}`} className="card">
            <div className="card__top">
                <img src={image} className="card__img" alt={title} />
            </div>
            <div className="card__bottom">
                <div className="card__title">{title}</div>
                <div className="card__price">{price} &#8381;</div>
                {countInBasket === 0 && <ButtonAdd className="card__btn" onClick={btnAddClick} />}
                {countInBasket !== 0 && <Counter id={id} />}
            </div>
        </Link>
    );
}

Card.propTypes = {
    id: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
};

export default Card;
