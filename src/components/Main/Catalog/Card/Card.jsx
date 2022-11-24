import PropTypes from "prop-types";
import "./Card.scss";
import "../../../ButtonAdd/ButtonAdd";
import ButtonAdd from "../../../ButtonAdd/ButtonAdd";

function Card({ image, title, description, price }) {
    return (
        <div className="card">
            <div className="card__top">
                <img src={image} alt="img" />
            </div>
            <div className="card__bottom">
                <div className="card__title">{title}</div>
                <div className="card__price">{price} &#8381;</div>
                <ButtonAdd className="card__btn" />
            </div>
        </div>
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
