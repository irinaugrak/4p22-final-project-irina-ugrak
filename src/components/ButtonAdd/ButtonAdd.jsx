import './ButtonAdd.scss';

function ButtonAdd({className}) {
    return (
        <button className={`btn-add ${className}`} type="button">
            В корзину
        </button>
    );
}

export default ButtonAdd;