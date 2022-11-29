import './ButtonAdd.scss';

function ButtonAdd({className, onClick}) {
    return (
        <button onClick={onClick} className={`btn-add ${className}`} type="button">
            В корзину
        </button>
    );
}

export default ButtonAdd;