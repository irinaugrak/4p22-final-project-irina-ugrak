import "./ButtonSign.scss";

function ButtonSign({className}) {
    return (
        <a className={`btn-sign ${className}`} href="./">
            Вход
        </a>
    );
}

export default ButtonSign;
