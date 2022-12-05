import "./ButtonMain.scss";

function ButtonMain( { title, className="", onClick } ) {
    return (
        <button onClick={onClick} className={`btn-main ${className}`}>{title}</button>
    )
}

export default ButtonMain;