import './ButtonAdd.scss';

function ButtonAdd({className}) {
    return (
        <button class={`btn-add ${className}`} type="button">
            В корзину
        </button>
    );
}

export default ButtonAdd;